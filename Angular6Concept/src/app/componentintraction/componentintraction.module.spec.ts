import { ComponentintractionModule } from './componentintraction.module';

describe('ComponentintractionModule', () => {
  let componentintractionModule: ComponentintractionModule;

  beforeEach(() => {
    componentintractionModule = new ComponentintractionModule();
  });

  it('should create an instance', () => {
    expect(componentintractionModule).toBeTruthy();
  });
});
