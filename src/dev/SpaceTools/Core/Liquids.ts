
const BLOCK_TYPE_LIQUID = Block.createSpecialType({
    solid: false,
    renderlayer: 1,
    explosionres: 10000
});

 LiquidRegistry.registerLiquid("spacescraft_oil", "Oil", ["oil_gl_flow"]); 
 
Block.createLiquidBlock("spacescraft_oil", 
{ 
 name: "Oil", 
 still: { 
 texture: ["oil_gl_still", 0], 
 id: "spacescraft_oil_still",
 }, 
 flowing: { 
 texture: ["oil_gl_flow", 0], 
 id: "spacescraft_oil_flowing",
 }, 
 bucket: { 
 texture: { name: "Bucket Oil", meta: 0 }, 
 //name: "bucket of oil",
 id: "bucket_of_oil",
 },
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_rubber", "Rubber", ["rubber_spacescraft"]); 
 
Block.createLiquidBlock("spacescraft_rubber", 
{ 
 name: "Rubber", 
 still: { 
 texture: ["rubber_spacescraft", 0], 
 id: "spacescraft_rubber_still",
 }, 
 flowing: { 
 texture: ["rubber_spacescraft", 0], 
 id: "spacescraft_rubber_flowing",
 }, 
 bucket: { 
 texture: { name: "rubber_bucket", meta: 0 }, 
 //name: "Bucket of rubber",
 id: "bucket_of_rubber",
 }, 
}, BLOCK_TYPE_LIQUID);






LiquidRegistry.registerLiquid("spacescraft_cerosin", "Cerosin", ["cerosin_sc"]); 
 
Block.createLiquidBlock("spacescraft_cerosin", 
{ 
 name: "Cerosin", 
 still: { 
 texture: ["cerosin_sc", 0], 
 id: "spacescraft_cerosin_still",
 }, 
 flowing: { 
 texture: ["cerosin_sc", 0], 
 id: "spacescraft_cerosin_flowing",
 }, 
 bucket: { 
 texture: { name: "cerosin_bucket", meta: 0 }, 
 //name: "Bucket of kerosene",
 id: "bucket_of_kerosene",
 }, 
}, BLOCK_TYPE_LIQUID);



 /*LiquidRegistry.registerLiquid("spacescraft_bad_fuel", "Dirty Fuel", ["bad_fuel"]); 
 
Block.createLiquidBlock("spacescraft_bad_fuel", 
{ 
 name: "Dirty Fuel", 
 still: { 
 texture: ["bad_fuel", 0], 
 id: "spacescraft_bad_fuel_still",
 }, 
 flowing: { 
 texture: ["bad_fuel", 0], 
 id: "spacescraft_bad_fuel_flowing",
 }, 
 bucket: { 
 texture: { name: "bad_fuel_bucket", meta: 0 }, 
 name: "Bucket of dirty fuel",
 id: "bucket_of_bad_fuel",
 }, 
}, BLOCK_TYPE_LIQUID);


*/
LiquidRegistry.registerLiquid("spacescraft_liquidoxygen", "Liquid Oxygen", ["liquidoxygen"]); 
 
Block.createLiquidBlock("spacescraft_liquidoxygen", 
{ 
 name: "Liquid Oxygen", 
 still: { 
 texture: ["liquidoxygen", 0], 
 id: "spacescraft_liquidoxygen_still",
 }, 
 flowing: { 
 texture: ["liquidoxygen", 0], 
 id: "spacescraft_liquidoxygen_flowing",
 }, 
 bucket: { 
 texture: { name: "oxygenliquid_bucket", meta: 0 }, 
 //name: "Bucket of liquid oxygen",
 id: "bucket_of_liquid_oxygen",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_argon", "Argon", ["argon"]); 
 
Block.createLiquidBlock("spacescraft_argon", 
{ 
 name: "Argon", 
 still: { 
 texture: ["argon", 0], 
 id: "spacescraft_argon_still",
 }, 
 flowing: { 
 texture: ["argon", 0], 
 id: "spacescraft_argon_flowing",
 }, 
 bucket: { 
 texture: { name: "argon_bucket", meta: 0 }, 
 //name: "Bucket of argon",
 id: "bucket_of_argon",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_methane", "Methane", ["methane"]); 
 
Block.createLiquidBlock("spacescraft_methane", 
{ 
 name: "Methane", 
 still: { 
 texture: ["methane", 0], 
 id: "spacescraft_methane_still",
 }, 
 flowing: { 
 texture: ["methane", 0], 
 id: "spacescraft_methane_flowing",
 }, 
 bucket: { 
 texture: { name: "methane_bucket", meta: 1 }, 
 //name: "Bucket of methane",
 id: "bucket_of_methane",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_liquid_methane", "Liquid Methane", ["liquidmethane"]); 
 
Block.createLiquidBlock("spacescraft_liquid_methane", 
{ 
 name: "Liquid Methane", 
 still: { 
 texture: ["liquidmethane", 0], 
 id: "spacescraft_liquid_methane_still",
 }, 
 flowing: { 
 texture: ["liquidmethane", 0], 
 id: "spacescraft_liquid_methane_flowing",
 }, 
 bucket: { 
 texture: { name: "liquidmethane_bucket", meta: 0 }, 
 //name: "Bucket of liquid methane",
 id: "bucket_of_liquid_methane",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_carbondioxide", "Carbon dioxide", ["carbondioxide"]); 
 
Block.createLiquidBlock("spacescraft_carbondioxide", 
{ 
 name: "Carbon dioxide", 
 still: { 
 texture: ["carbondioxide", 0], 
 id: "spacescraft_carbondioxide_still",
 }, 
 flowing: { 
 texture: ["carbondioxide", 0], 
 id: "spacescraft_carbondioxide_flowing",
 }, 
 bucket: { 
 texture: { name: "carbondioxide_bucket", meta: 0 }, 
//name: "Bucket of carbon dioxide",
 id: "bucket_of_carbondioxide",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_helium", "Helium", ["helium"]); 
 
Block.createLiquidBlock("spacescraft_helium", 
{ 
 name: "Helium", 
 still: { 
 texture: ["helium", 0], 
 id: "spacescraft_helium_still",
 }, 
 flowing: { 
 texture: ["helium", 0], 
 id: "spacescraft_helium_flowing",
 }, 
 bucket: { 
 texture: { name: "helium_bucket", meta: 0 }, 
 //name: "Bucket of helium",
 id: "bucket_of_helium",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_nitrogen", "Nitrogen", ["nitrogen"]); 
 
Block.createLiquidBlock("spacescraft_nitrogen", 
{ 
 name: "Nitrogen", 
 still: { 
 texture: ["nitrogen", 0], 
 id: "spacescraft_nitrogen_still",
 }, 
 flowing: { 
 texture: ["nitrogen", 0], 
 id: "spacescraft_nitrogen_flowing",
 }, 
 bucket: { 
 texture: { name: "nitrogen_bucket", meta: 0 }, 
 //name: "Bucket of nitrogen",
 id: "bucket_of_nitrogen",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("spacescraft_liquid_nitrogen", "Liquid Nitrogen", ["liquidnitrogen"]); 
 
Block.createLiquidBlock("spacescraft_liquid_nitrogen", 
{ 
 name: "Liquid Nitrogen", 
 still: { 
 texture: ["liquidnitrogen", 0], 
 id: "spacescraft_liquid_nitrogen_still",
 }, 
 flowing: { 
 texture: ["liquidnitrogen", 0], 
 id: "spacescraft_liquid_nitrogen_flowing",
 }, 
 bucket: { 
 texture: { name: "liquidnitrogen_bucket", meta: 0 }, 
 //name: "Bucket of liquid nitrogen",
 id: "bucket_of_liquid_nitrogen",
 }, 
}, BLOCK_TYPE_LIQUID);




LiquidRegistry.registerLiquid("spacescraft_liquid_argon", "Liquid Argon", ["liquidargon"]); 
 
Block.createLiquidBlock("spacescraft_liquid_argon", 
{ 
 name: "Liquid Argon", 
 still: { 
 texture: ["liquidargon", 0], 
 id: "spacescraft_liquid_argon_still",
 }, 
 flowing: {  
 texture: ["liquidargon", 0], 
 id: "spacescraft_liquid_argon_flowing",
 }, 
 bucket: { 
 texture: { name: "liquidargon_bucket", meta: 0 }, 
 //name: "Bucket of liquid argon",
 id: "bucket_of_liquid_argon",
 }, 
}, BLOCK_TYPE_LIQUID);


Translation.addTranslation("Bucket of kerosene", {ru: "Ведро с керосином"});

Translation.addTranslation("Bucket of rubber",
{ru: "Ведро с сырым каучуком"});

Translation.addTranslation("Bucket of liquid oxygen", {ru: "Ведро с жидким H2O"});

Translation.addTranslation("Bucket of dirty fuel", {ru: "Ведро с загрязнённым топливом"});

Translation.addTranslation("Bucket of methane", {ru: "Ведро с метаном"});

Translation.addTranslation("Bucket of liquid methane", {ru: "Ведро с жидким метаном"});

Translation.addTranslation("Bucket of argon", {ru: "Ведро с Аргоном"});

Translation.addTranslation("Bucket of liquid argon", {ru: "Ведро с жидким Аргоном"});

Translation.addTranslation("Bucket of nitrogen", {ru: "Ведро с Нитрогеном(азотом)"});

Translation.addTranslation("Bucket of liquid nitrogen", {ru: "Ведро с жидким Нитрогеном§e(азотом)"});


Translation.addTranslation("Bucket of carbon dioxide", {ru: "Ведро с жидким углекислым  газом"});

Translation.addTranslation("Bucket of helium", {ru: "Ведро с жидким гелием"});


Translation.addTranslation("Bucket of fuel", {ru: "Ведро с ракетным топливом"});

Translation.addTranslation("Bucket of oil", {ru: "Ведро с нефтью"});

Translation.addTranslation("Bucket of sulphuric acid", {ru: "Ведро серной кислоты"});

Translation.addTranslation("Bucket of sludge", {ru: "Ведро бактериального осадка"});



LiquidRegistry.registerLiquid("spacescraft_fuel", "spacescraft_fuel", ["fuel_gl_flow"]); 
 
Block.createLiquidBlock("spacescraft_fuel", 
{ 
 name: "Fuel", 
 still: { 
 texture: ["fuel_gl", 0], 
 id: "spacescraft_fuel_still",
 }, 
 flowing: { 
 texture: ["fuel_gl_flow", 0],
 id: "spacescraft_fuel_flowing",
 }, 
 bucket: { 
 texture: { name: "Bucket Fuel", meta: 0 }, 
// name: "Bucket of fuel",
 id: "bucket_of_fuel",
 }, 
}, BLOCK_TYPE_LIQUID);



LiquidRegistry.registerLiquid("sulphuric_acid", "Sulphuric Acid", ["sulphuric_acid_flow"]); 
 
Block.createLiquidBlock("sulphuric_acid", 
{ 
 name: "Sulphuric Acid", 
 still: { 
 texture: ["sulphuric_acid_still", 0],
 id: "spacescraft_sulphuric_acid_still",
 }, 
 flowing: { 
 texture: ["sulphuric_acid_flow", 0], 
 id: "spacescraft_sulphuric_acid_flow",
 }, 
 bucket: { 
 texture: { name: "bucket_sulphuric_acid", meta: 0 }, 
 //name: "Bucket of sulphuric acid",
 id: "bucket_of_sulphuric_acid",
 }, 
}, BLOCK_TYPE_LIQUID);

LiquidRegistry.registerLiquid("sludge_liquid", "Sludge", ["sludge_flow"]); 
 
Block.createLiquidBlock("sludge_liquid", 
{ 
 name: "Sludge", 
 still: { 
 texture: ["sludge_still", 0], 
 id: "spacescraft_sludge_still",
 }, 
 flowing: { 
 texture: ["sludge_flow", 0],
 id: "spacescraft_sludge_flowing",
 }, 
 bucket: { 
 texture: { name: "bucket_sludge", meta: 0 }, 
 //name: "Bucket of sludge",
 id: "bucket_of_sludge",
 }, 
 
}, BLOCK_TYPE_LIQUID);

