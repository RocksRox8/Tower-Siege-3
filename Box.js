class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        //'friction':1.0,
        //'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    super(x,y,50,50);
    this.visibility=255


    World.add(world, this.body);
  }

  

  display(){    
    push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("red");
        rect(0,0,this.width,this.height);

        score();

        if(this.body.speed<3){
          super.display();
        }
        else{
        World.remove(world,this.body);
        
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        
        }
        pop();

        
  }

  

 
    score(){
      if(this.Visiblity<0&&this.Visiblity>-1005){
      score=score+1;

     
    }
  }
    }