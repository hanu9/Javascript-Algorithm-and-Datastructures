var Point = function(x, y){
  this.x = x;
  this.y = y;
}
var output = [];
var path = function(startPoint, endPoint, p){
    if((startPoint.x === endPoint.x) && (startPoint.y === endPoint.y) || startPoint.y > endPoint.y){
      p.push(startPoint);
      output.push(p);
      return;
    }
    p.push(startPoint);
    var p1 = [].concat(p), p2 = [].concat(p);
    if(startPoint.y < endPoint.y){
      path(new Point(startPoint.x, startPoint.y+1), endPoint, p1);
    }
    if(startPoint.x < endPoint.x){
      path(new Point(startPoint.x+1, startPoint.y), endPoint, p2);
    }
}
path(new Point(0, 0), new Point(2, 2), []);
console.log(output);
