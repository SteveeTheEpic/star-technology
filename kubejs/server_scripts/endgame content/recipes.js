
ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('new_soldering_alloy')
        .itemInputs('14x gtceu:indium_dust', '3x gtceu:tin_dust', '2x gtceu:lead_dust', 'gtceu:cadmium_dust')
        .itemOutputs('20x gtceu:indium_tin_lead_cadmium_soldering_alloy_dust')
        .duration(400)
        .EUt(45000);
    
    event.recipes.gtceu.chemical_reactor('strontium_oxide')
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor('strontium_oxide')
        .itemInputs('gtceu:strontium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:strontium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.chemical_reactor('titanium_oxide')
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.large_chemical_reactor('titanium_oxide')
        .itemInputs('gtceu:titanium_dust')
        .inputFluids('gtceu:oxygen 1000')
        .itemOutputs('2x gtceu:titanium_oxide_dust')
        .duration(360)
        .EUt(320);

    event.recipes.gtceu.mixer('strontium_titanium_oxide')
        .itemInputs('gtceu:strontium_oxide_dust', 'gtceu:titanium_oxide_dust')
        .itemOutputs('2x gtceu:strontium_titanium_oxide_dust')
        .duration(400)
        .EUt(420);

    event.recipes.gtceu.chemical_reactor('iron_selenide')
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.large_chemical_reactor('iron_selenide')
        .itemInputs('gtceu:iron_dust', 'gtceu:selenium_dust')
        .itemOutputs('gtceu:iron_selenide_dust')
        .duration(360)
        .EUt(1460);

    event.recipes.gtceu.mixer('iron_selenide_over_strontium_titanium_oxide')
        .itemInputs('gtceu:iron_selenide_dust', 'gtceu:strontium_titanium_oxide_dust')
        .itemOutputs('2x gtceu:iron_selenide_over_strontium_titanium_oxide_dust')
        .duration(1200)
        .EUt(240000);

    event.recipes.gtceu.polarizer('magnetic_zapolgium')
        .itemInputs('gtceu:zapolgium_ingot')
        .itemOutputs('gtceu:magnetic_zapolgium_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.polarizer('magnetic_pure_netherite')
        .itemInputs('gtceu:pure_netherite_ingot')
        .itemOutputs('gtceu:magnetic_pure_netherite_ingot')
        .duration(80)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.centrifuge('nether_rare_earth')
        .itemInputs('gtceu:nether_rare_earth_dust')
        .itemOutputs('gtceu:polonium_dioxide_dust', 'gtceu:lanthanum_triastatate_dust', 'gtceu:hafnium_diboride_dust', 'gtceu:seaborgium_oxychloride_dust', 'gtceu:flerovium_oxide_dust')
        .outputFluids('gtceu:oganesson_diiodide 1000')
        .duration(920)
        .EUt(30000);

    event.remove({output: 'gtceu:hot_cerium_tritelluride_ingot'})
    event.recipes.gtceu.heat_chamber('hot_cerium_tritelluride_ingot')
        .itemInputs('gtceu:cerium_dust', '3x gtceu:tellurium_dust')
        .inputFluids('gtceu:xenon 120')
        .itemOutputs('4x gtceu:hot_cerium_tritelluride_ingot')
        .duration(5000)
        .circuit(2)
        .EUt((GTValues.VHA[GTValues.UHV]));

    event.recipes.gtceu.assembler('zalloy_coil')
        .itemInputs('8x gtceu:zalloy_double_wire', '8x gtceu:neutronium_foil')
        .inputFluids('gtceu:tritanium 144')
        .itemOutputs('kubejs:zalloy_coil_block')
        .duration(900)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.chemical_reactor('uepic_wafer')
        .itemInputs('gtceu:uhpic_wafer','4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:neutronium 576')
        .itemOutputs('kubejs:uepic_wafer')
        .duration(1200)
        .EUt((GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('uepic_chip')
        .itemInputs('kubejs:uepic_wafer')
        .itemOutputs('2x kubejs:uepic_chip')
        .duration(900)
        .EUt((GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.circuit_assembler('3d_nand_chip')
        .itemInputs('64x gtceu:nand_memory_chip', '12x gtceu:cerium_tritelluride_bolt', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 216')
        .itemOutputs('6x kubejs:3d_nand_chip')
        .duration(600)
        .EUt((GTValues.VA[GTValues.ZPM]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.circuit_assembler('3d_nor_chip')
        .itemInputs('64x gtceu:nor_memory_chip', '12x gtceu:cerium_tritelluride_bolt', '2x #gtceu:circuits/iv')
        .inputFluids('gtceu:indium_tin_lead_cadmium_soldering_alloy 216')
        .itemOutputs('6x kubejs:3d_nor_chip')
        .duration(600)
        .EUt((GTValues.VA[GTValues.ZPM]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.chemical_reactor('qRAM')
        .itemInputs('gtceu:ram_wafer','2x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:radon 250')
        .itemOutputs('kubejs:qram_wafer')
        .duration(1500)
        .EUt((GTValues.VA[GTValues.UV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.cutter('qram_chip')
        .itemInputs('kubejs:qram_wafer')
        .itemOutputs('12x kubejs:qram_chip')
        .duration(900)
        .EUt((GTValues.VA[GTValues.UHV]))
        .cleanroom(CleanroomType.STERILE_CLEANROOM);

    event.recipes.gtceu.chemical_plant('borax')
        .itemInputs('12x gtceu:boron_dust', '6x gtceu:sodium_bisulfate_dust')
        .inputFluids('minecraft:water 39000')
        .itemOutputs('3x gtceu:borax_dust')
        .outputFluids('gtceu:sulfuric_acid 6000')
        .duration(800)
        .EUt((GTValues.VA[GTValues.ZPM]))

    event.shaped(Item.of('gtceu:uhv_rotor_holder'), [
            'NZN',
            'ZCZ',
            'NZN'
        ], {
            N: 'gtceu:small_neutronium_gear',
            Z: 'gtceu:zalloy_gear',
            C: 'gtceu:uhv_machine_hull'
    });

});
