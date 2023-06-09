IDRegistry.genBlockID("refinery_sc");
Block.createBlockWithRotation("refinery_sc", [{
    name: "Refinery",
    texture: [["Machine",
        0],
        ["refinery_top",
            0],
        ["refinery_front",
            0],
        ["refinery_side",
            0],
        ["Machine Input",
            0],
        ["Machine Oxygen Input",
            0]],
    inCreative: true
}, {
    name: "Refinery",
    texture: [["Machine",
        0],
        ["refinery_top",
            0],
        ["refinery_front",
            0],
        ["refinery_side",
            0],
        ["Machine Input",
            0],
        ["Machine Oxygen Input",
            0]],
    inCreative: false
}, {
    name: "Refinery",
    texture: [["Machine",
        0],
        ["refinery_top",
            0],
        ["refinery_front",
            0],
        ["refinery_side",
            0],
        ["Machine Input",
            0],
        ["Machine Oxygen Input",
            0]],
    inCreative: false
},
],STONE);


let ClearFuel = new UI.StandartWindow(
    {
        standard: {
            header: {
                text: {
                    text: Translation.translate("Refinery")
                },
            },
            inventory: {
                standard: true
            },
            background: {
                standard: true
            }
        },
  
    drawing: [{
        type: "bitmap",
        x: 268,
        y: 190,
        bitmap: "Liquid_null",
        scale: 3.8
    },
        {
            type: "bitmap",
            x: 769,
            y: 190,
            bitmap: "Liquid_null",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 667,
            y: 190,
            bitmap: "Liquid_null",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 565,
            y: 190,
            bitmap: "Liquid_null",
            scale: 3.8
        },
        {
            type: "bitmap",
            x: 500,
            y: 70,
            bitmap: "slace_en_0",
            scale: 3
        },
        {
            type: "bitmap",
            x: 640,
            y: 70,
            bitmap: "en_noy",
            scale: 3
        },
    ],
    elements: {
        canister1:
        {
            type: "slot",
            x: 355,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        canister1i1:
        {
            type: "slot",
            x: 445,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        OilScall:
        {
            type: "scale",
            x: 268,
            y: 190,
            bitmap: "Liquid_oil",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},

        FUELScall: {
            type: "scale",
            x: 769,
            y: 190,
            bitmap: "Liquid_fuel",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},
        canister2:
        {
            type: "slot",
            x: 855,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        canister3: {
            type: "slot",
            x: 755,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        canister4: {
            type: "slot",
            x: 651,
            y: 120,
            size: 70,
            bitmap: "SPC.SPC_Canister"
        },
        CEROSINScall: {
            type: "scale",
            x: 667,
            y: 190,
            bitmap: "Others.Liquid_cerosin",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /*    RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},
        RUBBERScall: {
            type: "scale",
            x: 565,
            y: 190,
            bitmap: "Others.Liquid_rubber",
            scale: 3.8,
            direction: 1,
            clicker: {
                onClick: function() {
                    /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
                }}},
        ENERGYBar: {
            type: "scale",
            x: 500,
            y: 70,
            bitmap: "slace_en_1",
            scale: 3,
            direction: 0
        },
        Energy: {
            type: "scale",
            x: 640,
            y: 70,
            bitmap: "en_yes",
            scale: 3,
            direction: 1
        },
        ELECTRIC: {
            type: "text",
            x: 690,
            y: 80,
            width: 100,
            height: 30,
            text: "Space Joule"
        },
        EnergySlot: {
            type: "slot",
            x: 455,
            y: 260,
            size: 70,
            bitmap: "Others.en_slot"
        },
    }
}
);

SpacesMachine.registerStandartMachine(BlockID.refinery_sc, {
    useNetworkItemContainer: true,
    getScreenName() {
        return "main";
    },
    getScreenByName() {
        return ClearFuel
    },
    defaultValues: {
        progress: 0,
        progressMax: 0,
        active: false,
        energy: 0,
        energyMax: 500,
        fuel: 0,
        oil: 0,
        kerosene: 0,
        rubber: 0,
    },
    energyReceive: function(type, amount, voltage) {
        amount = Math.min(amount, 450)
        var add = Math.min(amount, this.getCapacity() - this.data.energy);
        this.data.energy += add
        return add
    },
    canReceiveEnergy: function(type, side) {
        return true;
    },
    getCapacity: function() {
        return 500
    },
    tick: function() {
        this.container.sendChanges();
        battery.add(this.container, this.data, "EnergySlot");
        battery.addInfinite(this.container, this.data, "EnergySlot")

        var canister2 = this.container.getSlot(
            "canister2");

        var canister3 = this.container.getSlot(
            "canister3");

        var canister4 = this.container.getSlot(
            "canister4");

        var canister1i1 = this.container.getSlot(
            "canister1i1");

        this.container.setScale("Energy", this.data.energy / 500);
        this.container.setScale("ENERGYBar", this.data.energy / 500);
        this.container.setScale("OilScall", this.data.oil / 40);
        this.container.setScale("CEROSINScall", this.data.kerosene / 40);
        this.container.setScale("RUBBERScall", this.data.rubber / 40);
        this.container.setScale("FUELScall", this.data.fuel / 40);
        this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
        if (this.data.energy >= 50) {

            if (this.container.getSlot("canister1").id == ItemID.bucket_of_oil && this.data.kerosene != 40 && this.data.fuel != 40 && this.data.rubber != 40) {
                this.container.setSlot("canister1", 325, 1, 0);
                this.data.fuel += 5;
                this.data.oil += 5;
                this.data.energy -= 45;
                Bucket.play();
                if (this.data.kerosene != 40 && this.data.fuel != 40) {
                    this.data.oil -= 5;
                };
                this.data.kerosene += 5;
                this.data.rubber += 5
                if (this.data.fuel == 40 || this.data.rubber == 40 || this.data.kerosene == 40 && this.container.getSlot("canister1").id == ItemID.bucket_of_oil) {
                    this.container.setSlot("canister1", 325, 1, 0); this.data.oil += 0
                }
            }


            if (
                this.container.getSlot(
                    "canister4").id ==
                ItemID.rubber_canister &&
                this.container.getSlot(
                    "canister4").data != 6 || this.container.getSlot("canister4").id ==
                ItemID.empty_liquid_canister) {
                if (
                    World.getThreadTime()%20 == 0 &&
                    this.data.rubber >= 1 &&
                    this.data.energy >= 15
                ) {
                    this.container.setSlot("canister4", ItemID.rubber_canister, 1,  canister4.data+1);
                    this.data.rubber -= 1;
                    this.data.energy -= 3
                }
            }
            
            if(
            this.container.getSlot(
                "canister2").id ==
            ItemID.fuel_canister &&
            this.container.getSlot(
                "canister2").data != 6 || this.container.getSlot(
                "canister2").id ==
            ItemID.empty_liquid_canister) {
            if (
                World.getThreadTime()%20 == 0 &&
                this.data.fuel >=1 &&
                this.data.energy >= 15
            ) {
                this.container.setSlot(
                    "canister2",
                    ItemID.fuel_canister,
                    1,
                    canister2.data+1);
                this.data.fuel -= 1;
                this.data.energy -= 3
            }

        }


    if (
        this.container.getSlot(
            "canister1i1").id ==
        ItemID.oil_canister &&
        this.container.getSlot(
            "canister1i1").data != 6 || this.container.getSlot(
            "canister1i1").id ==
        ItemID.empty_liquid_canister) {
        if (
            World.getThreadTime()%20 == 0 &&
            this.data.oil >= 1 &&
            this.data.energy >= 15
        ) {
            this.container.setSlot(
                "canister1i1",
                ItemID.oil_canister,
                1,
                canister1i1.data+1);
            this.data.oil -= 1;
            this.data.energy -= 3
        }

    }

    if (
        this.container.getSlot(
            "canister3").id ==
        ItemID.cerosin_canister &&
        this.container.getSlot(
            "canister3").data != 6 || this.container.getSlot(
            "canister3").id ==
        ItemID.empty_liquid_canister) {
        if (
            World.getThreadTime()%20 == 0 &&
            this.data.kerosene >=1 &&
            this.data.energy >= 15
        ) {
            this.container.setSlot(
                "canister3",
                ItemID.cerosin_canister,
                1,
                canister3.data+1);
            this.data.kerosene -= 1;
            this.data.energy -= 3
        }

    }}


},
energyTick: function(type, src) {

let output = Math.min(450, this.data.energy)
this.data.energy += src.add(output) - output;

}, click: function(id, count, data, coords) {



if (id == ItemID["Space wrench"]) {

this.blockSource.setBlock(
this.x,
this.y,
this.z,
BlockID.refinery_sc, this.blockSource.getBlockData(
this.x,
this.y,
this.z
)+1);


}

}
});