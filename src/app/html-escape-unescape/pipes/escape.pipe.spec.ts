import { EscapePipe } from './escape.pipe';
import { Escape } from '../escape';

describe('EscapePipe', () => {
  it('should create the escape pipe', () => {
    const pipe = new EscapePipe(new Escape());
    expect(pipe).toBeTruthy();
  });

  

});
