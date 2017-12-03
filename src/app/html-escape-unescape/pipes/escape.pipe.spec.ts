import { EscapePipe } from './escape.pipe';
import { Escape } from '../escape';
// import './test-suites'

describe('EscapePipe', () => {

  let pipe: EscapePipe;

  beforeEach(() => {
    pipe = new EscapePipe(new Escape());
  })

  it('should create the escape pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('tests suit: basic, case #', () => {
    expect(pipe.transform('<h1>yo</h1>')).toBe('&lt;h1&gt;yo&lt;/h1&gt;')
  })

});
