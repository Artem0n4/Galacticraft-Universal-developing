﻿IDRegistry.genBlockID("geothermal_generator_sc"); 
Block.createBlockWithRotation("geothermal_generator_sc", [
 {name: "Geothermal generator", texture: [["geothermal_vent", 0],["geothermal_vent", 0],["Machine", 0],["geothermal_inactive", 0],["Machine Output", 0],["Machine Output", 0]], inCreative: true},{name: "Geothermal generator", texture: [["geothermal_vent", 0],["geothermal_vent", 0],["Machine", 0],["geothermal", 0],["Machine Output", 0],["Machine Output", 0]], inCreative: false}
],STONE); 



let GeothermalSpout = new UI.StandartWindow(
    {
        standard: {
            header: {
                text: {
                    text: Translation.translate("Geothermal generator")
                },
            },
            inventory: {
                standard: true
            },
            background: {
                standard: true
            }
        },drawing:[
    {
        type: "bitmap",
        x: 340,
        y:60,
        bitmap: "generators.geoscale_0",
        scale:3.0
    }
    ],
    elements:
    {
        geoscale:
        {
            type:"scale",
            x:340,
            y:60,
            scale:3.0,
            bitmap:"generators.geoscale_1",direction:1},
    //     EnergiA: { type: "text", x: 390, y: 75, width: 100, height: 30, text: "Space Joule" },
    button:{type:"button",x:390,y:110,scale:1.4,bitmap:"butdeact",bitmap2:"butact",          clicker: {
    //         onClick: function() {
    // Click.play();
    //         } 
  }
         }
    }    
      }
    );

SpacesMachine.registerStandartMachine(BlockID.geothermal_generator_sc,{
	useNetworkItemContainer: true,
	getScreenName(){return "main";},
	getScreenByName(){return GeothermalSpout},
	defaultValues:{
	    energy: 0,
	    energyMaximal: 3000,
	    spouts: 1,
	    
	},
    tick: function(){
        this.container.sendChanges();
      if(
          this.data.energy>=3001
          ){
              this.data.energy=3000};
      
      this.container.setScale("geoscale", this.data.energy / 3000);
      

   	
   	this.container.setText(
   	    "EnergiA",
   	    "Sj :" + 
   	    this.data.energy 
   	    + " / " + 
   	    this.data.energyMaximal);
   	
   	
var tile = TileEntity.getTileEntity(
    
        this.x,
        this.y-1,
        this.z,
        this.blockSource
          )
if(tile && this.blockSource.getBlockId(this.x,this.y-1,this.z)==
BlockID.venus_spout){
    if(tile.data.spout==0){
        
        if(__config__.getBool("Игра.Special_Effects")){
    Particles.addParticle(spouticle, this.x + 0.4, this.y + 1, this.z + 0.4,
        Math.random()/20,
        Math.random()/20,
        Math.random()/20);}
   
  if(World.getThreadTime()%20 == 0){
      this.blockSource.setBlock(
        this.x,
        this.y, 
        this.z, 
        BlockID.geothermal_generator_sc, this.blockSource.getBlockData(
            this.x, 
            this.y, 
            this.z
              )+4*2/2);
  }
   	  if(World.getThreadTime()%30== 0){
   	      this.blockSource.setBlock(
        this.x,
        this.y, 
        this.z, 
        BlockID.geothermal_generator_sc, this.blockSource.getBlockData(
            this.x, 
            this.y, 
            this.z
             )
             -4);
   	  }
       
              
        if(World.getThreadTime()%10 == 0){
       this.data.energy+=1;
       
              
        }
      
    
}else{if(World.getThreadTime()%40 == 0&&__config__.getBool("Difficulty.Machine.GeothermalDischarging")==true){
       this.data.energy-=1;
       

}}}},getEnergyStorage: function() {
      return 3000
   },
   destroy: function (){
       if(this.data.energy>=2950){this.blockSource.explode(this.x,this.y,this.z,1,true)}
   },
   canReceiveEnergy: function() {
      return false;
   },

   canExtractEnergy: function() {
      return true;
   },

   energyTick: function(type, src) {
      let output = Math.min(1, this.data.energy);
      this.data.energy += src.add(output) - output;
   }});