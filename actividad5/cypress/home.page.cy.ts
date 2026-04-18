import { HomePage } from 'src/app/features/home/home.page';

describe('HomePage', () => {
  it('should create', () => {
    cy.mount(HomePage).then((wrapper) => {
      expect(wrapper.component).not.to.be.undefined;
    });
  });

  it('initialize the component with a specific title', () => {
    cy.mount(HomePage).then((wrapper) => {
      expect(wrapper.component.title()).to.equal('Home Page');
    });
  });

  it('can set the title to a supplied value', () => {
    cy.mount(HomePage).then((wrapper) => {
      wrapper.component.changeTitle('New Title');
      expect(wrapper.component.title()).to.equal('New Title');
    });
  });

  it('initialize the component with a specifi word', () => {
    cy.mount(HomePage).then((wrapper) => {
      expect(wrapper.component.word()).to.equal('Initial word');
    });
  });

  it('can get a random word', () => {
    cy.mount(HomePage).then((wrapper) => {
      wrapper.component.getWord();
      expect(wrapper.component.word()).to.not.equal('initial word');
    });
  });

  it('has a GenerateTextService that should return a non-empty array', () => {
    cy.mount(HomePage).then((wrapper) => {
      expect(wrapper.component.testservice.words).to.be.an('array').that.is.not
        .empty;
    });
  });

  it('has a GenerateTextService that should return a random word', () => {
    cy.mount(HomePage).then((wrapper) => {
      expect(wrapper.component.testservice.getRandomWord()).to.be.a('string');
    });
  });

  it("has a GenerateTextService that should have 'DAH' and 'service' in the list of words", () => {
    cy.mount(HomePage).then((wrapper) => {
      let words = wrapper.component.testservice.words;
      expect(words).to.include('DAH');
      expect(words).to.include('service');
    });
  });
});
