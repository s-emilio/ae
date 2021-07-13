freq = 8;
decay = 12;

t = time - inPoint;
startVal = [0,0];
endVal = [100,100];
dur = 0.15;
if (t < dur){
  linear(t,0,dur,startVal,endVal);
}else{
  amp = (endVal - startVal)/dur;
  w = freq*Math.PI*2;
  endVal + amp*(Math.sin((t-dur)*w)/Math.exp(decay*(t-dur))/w);
}
