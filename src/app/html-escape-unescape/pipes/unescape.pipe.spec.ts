import { UnescapePipe } from './unescape.pipe';
import { Unescape } from '../unescape';
// import './test-suites'

describe('UnescapePipe', () => {

  let pipe: UnescapePipe;

  beforeEach(() => {
    pipe = new UnescapePipe(new Unescape());
  })

  it('should create the unescape pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('tests suit: basic, case #', () => {
    expect(pipe.transform('&lt;h1&gt;yo&lt;/h1&gt;')).toBe('<h1>yo</h1>')
  })

});
