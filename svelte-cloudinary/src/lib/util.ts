/**
 * triggerOnIdle
 * @see MDN Polyfill https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js#L7-L24
 */

export function triggerOnIdle(callback: any) {
  if ( window && 'requestIdleCallback' in window ) {
    return requestIdleCallback(callback);
  }
  return setTimeout(() => callback(), 1);
}


export function invariant(condition: boolean,
message?: string ) {
  if(condition){
    return 
  }

  throw Error(message)


}
