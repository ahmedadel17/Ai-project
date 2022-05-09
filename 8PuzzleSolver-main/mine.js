class Node{
  previous;
  board;
  moves;
  priority;
  constructor(b,p,m){
    this.board=b;
    this.p=p;
    this.moves=m;
    this.priority=m+b.manhatan
  }
}
