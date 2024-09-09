
ServerEvents.tags('item', event => {
    event.add('gtceu:circuits/uv', 'kubejs:draconic_wetware_processor');
    event.add('gtceu:circuits/uhv', 'kubejs:draconic_wetware_processor_assembly');
    event.add('gtceu:circuits/uev', 'kubejs:draconic_wetware_processor_computer');
    event.add('gtceu:circuits/uiv', 'kubejs:draconic_wetware_processor_mainframe');
    event.remove('minecraft:planks', 'gtceu:treated_wood_planks');
});

ServerEvents.tags('item', event=>{
    const nc_plates = [
        'nuclearcraft:ferroboron_plate',
        'nuclearcraft:aluminum_plate',
        'nuclearcraft:graphite_plate',
        'nuclearcraft:manganese_plate',
        'nuclearcraft:sic_sic_cmc_plate',
        'nuclearcraft:lithium_plate',
        'nuclearcraft:thorium_plate',
        'nuclearcraft:hard_carbon_plate',
        'nuclearcraft:palladium_plate',
        'nuclearcraft:beryllium_plate',
        'nuclearcraft:zirconium_plate',
        'nuclearcraft:extreme_plate',
        'nuclearcraft:magnesium_plate',
        'nuclearcraft:hsla_steel_plate',
        'nuclearcraft:lithium_manganese_dioxide_plate',
        'nuclearcraft:boron_plate'
    ]
    const dust = [
        'nuclearcraft:germanium_dust',
        'nuclearcraft:zircaloy_dust',
        'nuclearcraft:yttrium_dust',
        'nuclearcraft:purpur_dust',
        'nuclearcraft:molybdenum_dust',
        'nuclearcraft:carbon_manganese_dust',
        'nuclearcraft:silicon_carbide_dust',
        'nuclearcraft:fluorite_dust',
        'nuclearcraft:palladium_dust',
        'nuclearcraft:zirconium_molybdenum_dust',
        'nuclearcraft:thorium_dust',
        'nuclearcraft:thermoconducting_dust',
        'nuclearcraft:aluminum_dust',
        'nuclearcraft:iodine_dust',
        'nuclearcraft:hafnium_dust',
        'nuclearcraft:sodium_hydroxide_dust',
        'nuclearcraft:caesium_137_dust',
        'nuclearcraft:sic_sic_cmc_dust',
        'nuclearcraft:manganese_dust',
        'nuclearcraft:manganese_oxide_dust',
        'nuclearcraft:crystal_binder_dust',
        'nuclearcraft:yellowcake_dust',
        'nuclearcraft:alugentum_dust',
        'nuclearcraft:borax_dust',
        'nuclearcraft:magnesium_dust',
        'nuclearcraft:manganese_dioxide_dust',
        'nuclearcraft:boron_nitride_dust',
        'nuclearcraft:protactinium_233_dust',
        'nuclearcraft:samarium_dust',
        'nuclearcraft:erbium_dust',
        'nuclearcraft:rhodochrosite_dust',
        'nuclearcraft:tough_alloy_dust',
        'nuclearcraft:ferroboron_dust',
        'nuclearcraft:strontium_dust',
        'nuclearcraft:hard_carbon_dust',
        'nuclearcraft:end_stone_dust',
        'nuclearcraft:niobium_dust',
        'nuclearcraft:potassium_hydroxide_dust',
        'nuclearcraft:lead_platinum_dust',
        'nuclearcraft:neodymium_dust',
        'nuclearcraft:lithium_dust',
        'nuclearcraft:carobbiite_dust',
        'nuclearcraft:tin_silver_dust',
        'nuclearcraft:sodium_dust',
        'nuclearcraft:dimensional_blend_dust',
        'nuclearcraft:thallium_dust',
        'nuclearcraft:villiaumite_dust',
        'nuclearcraft:potassium_iodide_dust',
        'nuclearcraft:calcium_dust',
        'nuclearcraft:ytterbium_dust',
        'nuclearcraft:titanium_dust',
        'nuclearcraft:energetic_blend_dust',
        'nuclearcraft:arsenic_dust',
        'nuclearcraft:polonium_dust',
        'nuclearcraft:shibuichi_dust',
        'nuclearcraft:extreme_dust',
        'nuclearcraft:beryllium_dust',
        'nuclearcraft:pyrolitic_carbon_dust',
        'nuclearcraft:potassium_fluoride_dust',
        'nuclearcraft:c_mn_blend_dust',
        'nuclearcraft:potassium_dust',
        'nuclearcraft:tbp_dust',
        'nuclearcraft:sodium_fluoride_dust',
        'nuclearcraft:irradiated_borax_dust',
        'nuclearcraft:lithium_manganese_dioxide_dust',
        'nuclearcraft:quartz_dust',
        'nuclearcraft:hsla_steel_dust',
        'nuclearcraft:terbium_dust',
        'nuclearcraft:calcium_sulfate_dust',
        'nuclearcraft:boron_dust',
        'nuclearcraft:bismuth_dust',
        'nuclearcraft:chromium_dust'
    ]
    const nc_ingots = [
        'nuclearcraft:manganese_oxide_ingot',
        'nuclearcraft:niobium_tin_ingot',
        'nuclearcraft:graphite_ingot',
        'nuclearcraft:lithium_ingot',
        'nuclearcraft:carbon_manganese_ingot',
        'nuclearcraft:silicon_carbide_ingot',
        'nuclearcraft:beryllium_ingot',
        'nuclearcraft:palladium_ingot',
        'nuclearcraft:zirconium_molybdenum_ingot',
        'nuclearcraft:thorium_ingot',
        'nuclearcraft:yttrium_ingot',
        'nuclearcraft:zircaloy_ingot',
        'nuclearcraft:shibuichi_ingot',
        'nuclearcraft:tungsten_carbide_ingot',
        'nuclearcraft:stainless_steel_ingot',
        'nuclearcraft:magnesium_ingot',
        'nuclearcraft:sodium_ingot',
        'nuclearcraft:tin_silver_ingot',
        'nuclearcraft:pyrolitic_carbon_ingot',
        'nuclearcraft:manganese_dioxide_ingot',
        'nuclearcraft:sic_sic_cmc_ingot',
        'nuclearcraft:manganese_ingot',
        'nuclearcraft:aluminum_ingot',
        'nuclearcraft:super_alloy_ingot',
        'nuclearcraft:titanium_ingot',
        'nuclearcraft:potassium_ingot',
        'nuclearcraft:niobium_titanium_ingot',
        'nuclearcraft:niobium_ingot',
        'nuclearcraft:hsla_steel_ingot',
        'nuclearcraft:nichrome_ingot',
        'nuclearcraft:boron_ingot',
        'nuclearcraft:chromium_ingot',
        'nuclearcraft:magnesium_diboride_ingot',
        'nuclearcraft:hafnium_ingot',
        'nuclearcraft:calcium_ingot',
        'nuclearcraft:strontium_ingot',
        'nuclearcraft:lithium_manganese_dioxide_ingot',
        'nuclearcraft:osmiridium_ingot',
        'nuclearcraft:lead_platinum_ingot',
        'nuclearcraft:zirconium_ingot',
        'thermalendergy:melodium_ingot',
        'thermalendergy:prismalium_ingot',
        'thermalendergy:stellarium_ingot',
    ]
    const blocks = [
        'nuclearcraft:supercold_ice_block',
        'nuclearcraft:magnesium_block',
        'nuclearcraft:aluminum_block',
        'nuclearcraft:graphite_block',
        'nuclearcraft:californium250_block',
        'nuclearcraft:lithium_block',
        'nuclearcraft:thorium_block',
        'nuclearcraft:americium241_block',
        'nuclearcraft:boron_block',
        'nuclearcraft:zirconium_block',
        'nuclearcraft:uranium238_block',
        'nuclearcraft:beryllium_block',
        'nuclearcraft:plutonium238_block',
        'thermalendergy:melodium_block',
        'thermalendergy:prismalium_block',
        'thermalendergy:stellarium_block',
    ]
    const nuggets = [
        'nuclearcraft:magnesium_nugget',
        'nuclearcraft:spaxelhoe_tough',
        'nuclearcraft:spaxelhoe_thorium',
        'nuclearcraft:aluminum_nugget',
        'nuclearcraft:lithium_nugget',
        'nuclearcraft:thorium_nugget',
        'nuclearcraft:beryllium_nugget',
        'nuclearcraft:zirconium_nugget',
        'nuclearcraft:boron_nugget',
        'thermalendergy:melodium_nugget',
        'thermalendergy:prismalium_nugget',
        'thermalendergy:stellarium_nugget',
    ]
    const gems = [
        'nuclearcraft:boron_arsenide_gem',
        'nuclearcraft:carobbiite_gem',
        'nuclearcraft:silicon_gem',
        'nuclearcraft:villiaumite_gem',
        'nuclearcraft:fluorite_gem',
        'nuclearcraft:rhodochrosite_gem',
        'nuclearcraft:boron_nitride_gem',
    ]

    dust.forEach((item)=> {
        event.removeAllTagsFrom(`${item}`)
    });
    blocks.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    nc_ingots.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    nc_plates.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    gems.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
    nuggets.forEach((item)=>{
        event.removeAllTagsFrom(`${item}`)
    });
});

ServerEvents.tags('fluid', event=>{
    const nc_fluids =[
        'nuclearcraft:manganese_oxide',
        'nuclearcraft:sulfur',
        'nuclearcraft:palladium',
        'nuclearcraft:tin',
        'nuclearcraft:zirconium_molybdenum',
        'nuclearcraft:thorium',
        'nuclearcraft:zircaloy',
        'nuclearcraft:thermoconducting',
        'nuclearcraft:platinum',
        'nuclearcraft:lithium',
        'nuclearcraft:beryllium',
        'nuclearcraft:lapis',
        'nuclearcraft:ruthenium_106',
        'nuclearcraft:silicon_carbide',
        'nuclearcraft:zinc',
        'nuclearcraft:carbon_manganese',
        'nuclearcraft:extreme',
        'nuclearcraft:molybdenum',
        'nuclearcraft:shibuichi',
        'nuclearcraft:silver',
        'nuclearcraft:manganese_dioxide',
        'nuclearcraft:tin_silver',
        'nuclearcraft:bronze',
        'nuclearcraft:arsenic',
        'nuclearcraft:magnesium',
        'nuclearcraft:polonium',
        'nuclearcraft:purpur',
        'nuclearcraft:obsidian',
        'nuclearcraft:corium',
        'nuclearcraft:uranium',
        'nuclearcraft:tough_alloy',
        'nuclearcraft:steel',
        'nuclearcraft:ferroboron',
        'nuclearcraft:cobalt',
        'nuclearcraft:strontium_90',
        'nuclearcraft:potassium_hydroxide',
        'nuclearcraft:aluminum',
        'nuclearcraft:electrum',
        'nuclearcraft:zirconium',
        'nuclearcraft:copper',
        'nuclearcraft:hard_carbon',
        'nuclearcraft:enderium',
        'nuclearcraft:europium_155',
        'nuclearcraft:gold',
        'nuclearcraft:sic_sic_cmc',
        'nuclearcraft:manganese',
        'nuclearcraft:promethium_147',
        'nuclearcraft:caesium_137',
        'nuclearcraft:potassium_iodide',
        'nuclearcraft:lithium_manganese_dioxide',
        'nuclearcraft:lead',
        'nuclearcraft:boron_arsenide',
        'nuclearcraft:lead_platinum',
        'nuclearcraft:iron',
        'nuclearcraft:hsla_steel',
        'nuclearcraft:boron',
        'nuclearcraft:magnesium_diboride',
        'nuclearcraft:sodium_hydroxide',
        'nuclearcraft:radon',
        'nuclearcraft:low_pressure_steam',
        'nuclearcraft:nitrogen_dioxide',
        'nuclearcraft:ammonia',
        'nuclearcraft:diborane',
        'nuclearcraft:hydrogen',
        'nuclearcraft:oxygen',
        'nuclearcraft:high_pressure_steam',
        'nuclearcraft:fluoromethane',
        'nuclearcraft:steam',
        'nuclearcraft:low_quality_steam',
        'nuclearcraft:carbon',
        'nuclearcraft:deuterium',
        'nuclearcraft:ethene',
        'nuclearcraft:nitric_oxide',
        'nuclearcraft:helium_3',
        'nuclearcraft:fluorine',
        'nuclearcraft:exhaust_steam',
        'nuclearcraft:tritium',
        'nuclearcraft:neon',
        'nuclearcraft:nitrogen',
        'nuclearcraft:sulfur_dioxide',
        'nuclearcraft:helium',
        'nuclearcraft:oxygen_difluoride',
        'nuclearcraft:depleted_fuel_neptunium_len_236_za',
        'nuclearcraft:fuel_neptunium_len_236_za',
        'nuclearcraft:depleted_fuel_neptunium_len_236',
        'nuclearcraft:fuel_neptunium_len_236',
        'nuclearcraft:carbon_monoxide',
        'nuclearcraft:argon',
        'nuclearcraft:carbon_dioxide',
        'nuclearcraft:sulfur_trioxide',
        'nuclearcraft:chlorine',
        'nuclearcraft:fuel_neptunium_len_236_ox',
        'nuclearcraft:depleted_fuel_neptunium_len_236_ox',
        'nuclearcraft:fuel_neptunium_len_236_ni',
        'nuclearcraft:depleted_fuel_neptunium_len_236_ni',
        'nuclearcraft:fuel_neptunium_hen_236',
        'nuclearcraft:depleted_fuel_neptunium_hen_236',
        'nuclearcraft:fuel_neptunium_hen_236_za',
        'nuclearcraft:depleted_fuel_neptunium_hen_236_za',
        'nuclearcraft:fuel_neptunium_hen_236_ox',
        'nuclearcraft:depleted_fuel_neptunium_hen_236_ox',
        'nuclearcraft:fuel_curium_lecm_245_ni',
        'nuclearcraft:fuel_neptunium_hen_236_ni',
        'nuclearcraft:depleted_fuel_curium_lecm_245_ni',
        'nuclearcraft:depleted_fuel_neptunium_hen_236_ni',
        'nuclearcraft:fuel_curium_lecm_247',
        'nuclearcraft:fuel_curium_lecm_245',
        'nuclearcraft:depleted_fuel_curium_lecm_247',
        'nuclearcraft:depleted_fuel_curium_lecm_245',
        'nuclearcraft:fuel_curium_lecm_247_za',
        'nuclearcraft:fuel_curium_lecm_245_za',
        'nuclearcraft:depleted_fuel_curium_lecm_247_za',
        'nuclearcraft:fuel_curium_lecm_247_ox',
        'nuclearcraft:depleted_fuel_curium_lecm_245_za',
        'nuclearcraft:fuel_curium_lecm_245_ox',
        'nuclearcraft:depleted_fuel_curium_lecm_247_ox',
        'nuclearcraft:fuel_curium_lecm_247_ni',
        'nuclearcraft:depleted_fuel_curium_lecm_245_ox',
        'nuclearcraft:depleted_fuel_curium_hecm_245_ni',
        'nuclearcraft:fuel_curium_lecm_243',
        'nuclearcraft:depleted_fuel_curium_hecm_247_ni',
        'nuclearcraft:fuel_curium_hecm_245_ni',
        'nuclearcraft:depleted_fuel_curium_hecm_245_ox',
        'nuclearcraft:fuel_curium_hecm_247_ni',
        'nuclearcraft:depleted_fuel_curium_hecm_247_ox',
        'nuclearcraft:fuel_curium_hecm_245_ox',
        'nuclearcraft:depleted_fuel_curium_hecm_245_za',
        'nuclearcraft:fuel_curium_hecm_247_ox',
        'nuclearcraft:depleted_fuel_curium_hecm_247_za',
        'nuclearcraft:fuel_curium_hecm_245_za',
        'nuclearcraft:depleted_fuel_curium_hecm_245',
        'nuclearcraft:fuel_curium_hecm_247_za',
        'nuclearcraft:depleted_fuel_curium_hecm_247',
        'nuclearcraft:fuel_curium_hecm_245',
        'nuclearcraft:depleted_fuel_curium_lecm_247_ni',
        'nuclearcraft:fuel_curium_hecm_247',
        'nuclearcraft:depleted_fuel_curium_lecm_243',
        'nuclearcraft:fuel_curium_hecm_243_za',
        'nuclearcraft:depleted_fuel_curium_hecm_243_za',
        'nuclearcraft:fuel_curium_lecm_243_za',
        'nuclearcraft:depleted_fuel_curium_lecm_243_za',
        'nuclearcraft:fuel_curium_hecm_243_ox',
        'nuclearcraft:depleted_fuel_curium_hecm_243_ox',
        'nuclearcraft:fuel_curium_lecm_243_ox',
        'nuclearcraft:depleted_fuel_curium_lecm_243_ox',
        'nuclearcraft:fuel_curium_hecm_243_ni',
        'nuclearcraft:depleted_fuel_curium_hecm_243_ni',
        'nuclearcraft:fuel_curium_lecm_243_ni',
        'nuclearcraft:depleted_fuel_curium_lecm_243_ni',
        'nuclearcraft:fuel_berkelium_heb_248',
        'nuclearcraft:depleted_fuel_berkelium_heb_248',
        'nuclearcraft:fuel_curium_hecm_243',
        'nuclearcraft:depleted_fuel_curium_hecm_243',
        'nuclearcraft:fuel_berkelium_heb_248_za',
        'nuclearcraft:depleted_fuel_berkelium_leb_248_za',
        'nuclearcraft:fuel_thorium_tbu_ox',
        'nuclearcraft:depleted_fuel_thorium_tbu_za',
        'nuclearcraft:fuel_berkelium_leb_248_za',
        'nuclearcraft:depleted_fuel_berkelium_leb_248',
        'nuclearcraft:fuel_thorium_tbu_za',
        'nuclearcraft:depleted_fuel_thorium_tbu',
        'nuclearcraft:fuel_berkelium_leb_248',
        'nuclearcraft:depleted_fuel_berkelium_heb_248_ni',
        'nuclearcraft:fuel_thorium_tbu',
        'nuclearcraft:depleted_fuel_berkelium_leb_248_ni',
        'nuclearcraft:fuel_berkelium_heb_248_ni',
        'nuclearcraft:depleted_fuel_berkelium_heb_248_ox',
        'nuclearcraft:fuel_berkelium_leb_248_ni',
        'nuclearcraft:depleted_fuel_berkelium_leb_248_ox',
        'nuclearcraft:fuel_berkelium_heb_248_ox',
        'nuclearcraft:depleted_fuel_berkelium_heb_248_za',
        'nuclearcraft:fuel_berkelium_leb_248_ox',
        'nuclearcraft:depleted_fuel_thorium_tbu_ox',
        'nuclearcraft:fuel_mixed_mix_239_ni',
        'nuclearcraft:depleted_fuel_mixed_mix_239_ni',
        'nuclearcraft:fuel_thorium_tbu_ni',
        'nuclearcraft:depleted_fuel_thorium_tbu_ni',
        'nuclearcraft:fuel_mixed_mix_241',
        'nuclearcraft:depleted_fuel_mixed_mix_241',
        'nuclearcraft:fuel_mixed_mix_239',
        'nuclearcraft:depleted_fuel_mixed_mix_239',
        'nuclearcraft:fuel_mixed_mix_241_za',
        'nuclearcraft:depleted_fuel_mixed_mix_241_za',
        'nuclearcraft:fuel_mixed_mix_239_za',
        'nuclearcraft:depleted_fuel_mixed_mix_239_za',
        'nuclearcraft:fuel_mixed_mix_241_ox',
        'nuclearcraft:depleted_fuel_mixed_mix_241_ox',
        'nuclearcraft:fuel_mixed_mix_239_ox',
        'nuclearcraft:depleted_fuel_mixed_mix_239_ox',
        'nuclearcraft:fuel_mixed_mix_241_ni',
        'nuclearcraft:depleted_fuel_uranium_leu_233_ni',
        'nuclearcraft:fuel_uranium_heu_235',
        'nuclearcraft:depleted_fuel_uranium_leu_235_ni',
        'nuclearcraft:fuel_uranium_leu_233_ni',
        'nuclearcraft:depleted_fuel_uranium_leu_233_ox',
        'nuclearcraft:fuel_uranium_leu_235_ni',
        'nuclearcraft:depleted_fuel_uranium_leu_235_ox',
        'nuclearcraft:fuel_uranium_leu_233_ox',
        'nuclearcraft:depleted_fuel_uranium_leu_233_za',
        'nuclearcraft:fuel_uranium_leu_235_ox',
        'nuclearcraft:depleted_fuel_uranium_leu_235_za',
        'nuclearcraft:fuel_uranium_leu_233_za',
        'nuclearcraft:depleted_fuel_uranium_leu_233',
        'nuclearcraft:fuel_uranium_leu_235_za',
        'nuclearcraft:depleted_fuel_uranium_leu_235',
        'nuclearcraft:fuel_uranium_leu_233',
        'nuclearcraft:depleted_fuel_mixed_mix_241_ni',
        'nuclearcraft:fuel_uranium_leu_235',
        'nuclearcraft:depleted_fuel_uranium_heu_235',
        'nuclearcraft:fuel_uranium_heu_233_za',
        'nuclearcraft:depleted_fuel_americium_hea_242_za',
        'nuclearcraft:fuel_americium_hea_242_ox',
        'nuclearcraft:depleted_fuel_uranium_heu_233_za',
        'nuclearcraft:fuel_uranium_heu_235_za',
        'nuclearcraft:depleted_fuel_uranium_heu_235_za',
        'nuclearcraft:fuel_uranium_heu_233_ox',
        'nuclearcraft:depleted_fuel_americium_hea_242_ox',
        'nuclearcraft:fuel_americium_hea_242_ni',
        'nuclearcraft:depleted_fuel_uranium_heu_233_ox',
        'nuclearcraft:fuel_uranium_heu_235_ox',
        'nuclearcraft:depleted_fuel_uranium_heu_235_ox',
        'nuclearcraft:fuel_uranium_heu_233_ni',
        'nuclearcraft:depleted_fuel_americium_hea_242_ni',
        'nuclearcraft:fuel_americium_lea_242',
        'nuclearcraft:depleted_fuel_uranium_heu_233_ni',
        'nuclearcraft:fuel_uranium_heu_235_ni',
        'nuclearcraft:depleted_fuel_uranium_heu_235_ni',
        'nuclearcraft:fuel_americium_hea_242',
        'nuclearcraft:depleted_fuel_americium_lea_242',
        'nuclearcraft:fuel_americium_lea_242_za',
        'nuclearcraft:depleted_fuel_americium_hea_242',
        'nuclearcraft:fuel_uranium_heu_233',
        'nuclearcraft:depleted_fuel_uranium_heu_233',
        'nuclearcraft:fuel_americium_hea_242_za',
        'nuclearcraft:depleted_fuel_americium_lea_242_za',
        'nuclearcraft:fuel_americium_lea_242_ox',
        'nuclearcraft:depleted_fuel_plutonium_lep_241_ox',
        'nuclearcraft:depleted_fuel_americium_lea_242_ox',
        'nuclearcraft:fuel_plutonium_lep_241_ni',
        'nuclearcraft:fuel_americium_lea_242_ni',
        'nuclearcraft:depleted_fuel_plutonium_lep_241_ni',
        'nuclearcraft:depleted_fuel_americium_lea_242_ni',
        'nuclearcraft:fuel_plutonium_hep_241',
        'nuclearcraft:fuel_plutonium_lep_241',
        'nuclearcraft:depleted_fuel_plutonium_hep_241',
        'nuclearcraft:depleted_fuel_plutonium_lep_241',
        'nuclearcraft:fuel_plutonium_hep_241_za',
        'nuclearcraft:fuel_plutonium_lep_241_za',
        'nuclearcraft:depleted_fuel_plutonium_hep_241_za',
        'nuclearcraft:depleted_fuel_plutonium_lep_241_za',
        'nuclearcraft:fuel_plutonium_hep_241_ox',
        'nuclearcraft:fuel_plutonium_lep_241_ox',
        'nuclearcraft:depleted_fuel_plutonium_hep_241_ox',
        'nuclearcraft:fuel_plutonium_lep_239_ni',
        'nuclearcraft:depleted_fuel_plutonium_hep_239_ni',
        'nuclearcraft:fuel_plutonium_hep_239_ni',
        'nuclearcraft:depleted_fuel_plutonium_lep_239_ox',
        'nuclearcraft:fuel_plutonium_lep_239_ox',
        'nuclearcraft:depleted_fuel_plutonium_hep_239_ox',
        'nuclearcraft:fuel_plutonium_hep_239_ox',
        'nuclearcraft:depleted_fuel_plutonium_lep_239_za',
        'nuclearcraft:fuel_plutonium_lep_239_za',
        'nuclearcraft:depleted_fuel_plutonium_hep_239_za',
        'nuclearcraft:fuel_plutonium_hep_239_za',
        'nuclearcraft:depleted_fuel_plutonium_lep_239',
        'nuclearcraft:fuel_plutonium_lep_239',
        'nuclearcraft:depleted_fuel_plutonium_hep_239',
        'nuclearcraft:fuel_plutonium_hep_239',
        'nuclearcraft:depleted_fuel_plutonium_hep_241_ni',
        'nuclearcraft:fuel_plutonium_hep_241_ni',
        'nuclearcraft:depleted_fuel_plutonium_lep_239_ni',
        'nuclearcraft:fuel_californium_hecf_251',
        'nuclearcraft:depleted_fuel_californium_lecf_249',
        'nuclearcraft:fuel_californium_lecf_249_za',
        'nuclearcraft:depleted_fuel_californium_hecf_251',
        'nuclearcraft:fuel_californium_hecf_251_za',
        'nuclearcraft:depleted_fuel_californium_lecf_249_za',
        'nuclearcraft:fuel_californium_lecf_249_ox',
        'nuclearcraft:depleted_fuel_californium_hecf_251_za',
        'nuclearcraft:fuel_californium_hecf_251_ox',
        'nuclearcraft:depleted_fuel_californium_lecf_249_ox',
        'nuclearcraft:fuel_californium_lecf_249_ni',
        'nuclearcraft:depleted_fuel_californium_hecf_251_ox',
        'nuclearcraft:fuel_californium_hecf_251_ni',
        'nuclearcraft:depleted_fuel_californium_lecf_249_ni',
        'nuclearcraft:fuel_californium_hecf_249',
        'nuclearcraft:depleted_fuel_californium_hecf_251_ni',
        'nuclearcraft:fuel_californium_lecf_249',
        'nuclearcraft:depleted_fuel_californium_hecf_249',
        'nuclearcraft:fuel_californium_lecf_251_za',
        'nuclearcraft:plutonium_242_ni',
        'nuclearcraft:plutonium_242_ox',
        'nuclearcraft:fuel_californium_lecf_251',
        'nuclearcraft:plutonium_242_za',
        'nuclearcraft:plutonium_242',
        'nuclearcraft:depleted_fuel_californium_hecf_249_ni',
        'nuclearcraft:fuel_californium_hecf_249_ni',
        'nuclearcraft:depleted_fuel_californium_lecf_251_ni',
        'nuclearcraft:fuel_californium_lecf_251_ni',
        'nuclearcraft:depleted_fuel_californium_hecf_249_ox',
        'nuclearcraft:fuel_californium_hecf_249_ox',
        'nuclearcraft:depleted_fuel_californium_lecf_251_ox',
        'nuclearcraft:fuel_californium_lecf_251_ox',
        'nuclearcraft:depleted_fuel_californium_hecf_249_za',
        'nuclearcraft:fuel_californium_hecf_249_za',
        'nuclearcraft:depleted_fuel_californium_lecf_251_za',
        'nuclearcraft:californium_251',
        'nuclearcraft:americium_242_za',
        'nuclearcraft:americium_242_ox',
        'nuclearcraft:californium_251_za',
        'nuclearcraft:californium_251_ox',
        'nuclearcraft:americium_242_ni',
        'nuclearcraft:americium_241',
        'nuclearcraft:californium_251_ni',
        'nuclearcraft:californium_252',
        'nuclearcraft:americium_241_za',
        'nuclearcraft:americium_241_ox',
        'nuclearcraft:californium_252_za',
        'nuclearcraft:californium_252_ox',
        'nuclearcraft:americium_241_ni',
        'nuclearcraft:plutonium_241',
        'nuclearcraft:californium_252_ni',
        'nuclearcraft:americium_242',
        'nuclearcraft:plutonium_241_za',
        'nuclearcraft:berkelium_247_ox',
        'nuclearcraft:neptunium_236_ni',
        'nuclearcraft:neptunium_236_ox',
        'nuclearcraft:berkelium_247_za',
        'nuclearcraft:berkelium_247',
        'nuclearcraft:neptunium_236_za',
        'nuclearcraft:neptunium_236',
        'nuclearcraft:lithium_6_ni',
        'nuclearcraft:lithium_6_ox',
        'nuclearcraft:berkelium_248_ni',
        'nuclearcraft:berkelium_248_ox',
        'nuclearcraft:lithium_6_za',
        'nuclearcraft:lithium_6',
        'nuclearcraft:berkelium_248_za',
        'nuclearcraft:berkelium_248',
        'nuclearcraft:plutonium_241_ni',
        'nuclearcraft:plutonium_241_ox',
        'nuclearcraft:berkelium_247_ni',
        'nuclearcraft:thorium_232',
        'nuclearcraft:lithium_7_za',
        'nuclearcraft:neptunium_237_ox',
        'nuclearcraft:neptunium_237_ni',
        'nuclearcraft:lithium_7_ox',
        'nuclearcraft:thorium_232_za',
        'nuclearcraft:thorium_232_ox',
        'nuclearcraft:lithium_7_ni',
        'nuclearcraft:plutonium_238',
        'nuclearcraft:plutonium_238_za',
        'nuclearcraft:thorium_230',
        'nuclearcraft:thorium_232_ni',
        'nuclearcraft:americium_243',
        'nuclearcraft:thorium_230_za',
        'nuclearcraft:plutonium_238_ox',
        'nuclearcraft:plutonium_238_ni',
        'nuclearcraft:thorium_230_ox',
        'nuclearcraft:americium_243_za',
        'nuclearcraft:americium_243_ox',
        'nuclearcraft:thorium_230_ni',
        'nuclearcraft:uranium_235',
        'nuclearcraft:uranium_235_za',
        'nuclearcraft:neptunium_237',
        'nuclearcraft:americium_243_ni',
        'nuclearcraft:lithium_7',
        'nuclearcraft:neptunium_237_za',
        'nuclearcraft:uranium_235_ox',
        'nuclearcraft:uranium_235_ni',
        'nuclearcraft:uranium_233',
        'nuclearcraft:boron_11_za',
        'nuclearcraft:boron_11_ox',
        'nuclearcraft:uranium_233_za',
        'nuclearcraft:uranium_238',
        'nuclearcraft:uranium_238_za',
        'nuclearcraft:uranium_233_ox',
        'nuclearcraft:boron_11_ni',
        'nuclearcraft:curium_246',
        'nuclearcraft:uranium_233_ni',
        'nuclearcraft:uranium_238_ox',
        'nuclearcraft:uranium_238_ni',
        'nuclearcraft:boron_10',
        'nuclearcraft:curium_246_za',
        'nuclearcraft:curium_246_ox',
        'nuclearcraft:boron_10_za',
        'nuclearcraft:californium_249',
        'nuclearcraft:californium_249_za',
        'nuclearcraft:boron_10_ox',
        'nuclearcraft:curium_246_ni',
        'nuclearcraft:curium_247',
        'nuclearcraft:boron_10_ni',
        'nuclearcraft:californium_249_ox',
        'nuclearcraft:californium_249_ni',
        'nuclearcraft:boron_11',
        'nuclearcraft:curium_247_za',
        'nuclearcraft:californium_250_ox',
        'nuclearcraft:curium_243_ni',
        'nuclearcraft:liquid_helium',
        'nuclearcraft:liquid_oxygen',
        'nuclearcraft:curium_243_ox',
        'nuclearcraft:californium_250_za',
        'nuclearcraft:californium_250',
        'nuclearcraft:curium_243_za',
        'nuclearcraft:liquid_nitrogen',
        'nuclearcraft:nitric_acid',
        'nuclearcraft:curium_243',
        'nuclearcraft:plutonium_239_ni',
        'nuclearcraft:plutonium_239_ox',
        'nuclearcraft:curium_245_ni',
        'nuclearcraft:hydrofluoric_acid',
        'nuclearcraft:boric_acid',
        'nuclearcraft:curium_245_ox',
        'nuclearcraft:plutonium_239_za',
        'nuclearcraft:plutonium_239',
        'nuclearcraft:curium_245_za',
        'nuclearcraft:sulfuric_acid',
        'nuclearcraft:hydrochloric_acid',
        'nuclearcraft:curium_245',
        'nuclearcraft:curium_247_ni',
        'nuclearcraft:curium_247_ox',
        'nuclearcraft:californium_250_ni',
        'nuclearcraft:acua_regia_acid',
        'nuclearcraft:liquid_hydrogen',
        'nuclearcraft:potassium_hydroxide_solution',
        'nuclearcraft:beryllium_fluoride',
        'nuclearcraft:technical_water',
        'nuclearcraft:boron_nitride_solution',
        'nuclearcraft:hydrogen_chloride',
        'nuclearcraft:emergency_coolant',
        'nuclearcraft:boron_arsenide_solution',
        'nuclearcraft:irradiated_borax_solution',
        'nuclearcraft:condensate_water',
        'nuclearcraft:methanol',
        'nuclearcraft:radaway_slow',
        'nuclearcraft:sodium_hydroxide_solution',
        'nuclearcraft:calcium_sulfate_solution',
        'nuclearcraft:redstone_ethanol',
        'nuclearcraft:milk_chocolate',
        'nuclearcraft:fluorite_water',
        'nuclearcraft:marshmallow',
        'nuclearcraft:ice',
        'nuclearcraft:heavy_water',
        'nuclearcraft:borax_solution',
        'nuclearcraft:hydrated_gelatin',
        'nuclearcraft:ethanol',
        'nuclearcraft:dark_chocolate',
        'nuclearcraft:potassium_fluoride_solution',
        'nuclearcraft:cocoa_butter',
        'nuclearcraft:sugar',
        'nuclearcraft:aluminum_slurry',
        'nuclearcraft:platinum_clean_slurry',
        'nuclearcraft:copper_slurry',
        'nuclearcraft:uranium_clean_slurry',
        'nuclearcraft:unsweetened_chocolate',
        'nuclearcraft:radaway',
        'nuclearcraft:cobalt_slurry',
        'nuclearcraft:boron_slurry',
        'nuclearcraft:iron_clean_slurry',
        'nuclearcraft:aluminum_clean_slurry',
        'nuclearcraft:pasteurized_milk',
        'nuclearcraft:emergency_coolant_heated',
        'nuclearcraft:silver_slurry',
        'nuclearcraft:zinc_slurry',
        'nuclearcraft:tin_slurry',
        'nuclearcraft:silver_clean_slurry',
        'nuclearcraft:sodium_fluoride_solution',
        'nuclearcraft:chocolate_liquor',
        'nuclearcraft:thorium_clean_slurry',
        'nuclearcraft:magnesium_slurry',
        'nuclearcraft:iron_slurry',
        'nuclearcraft:uranium_oxide',
        'nuclearcraft:lithium_fluoride',
        'nuclearcraft:gelatin',
        'nuclearcraft:zinc_clean_slurry',
        'nuclearcraft:boron_clean_slurry',
        'nuclearcraft:gold_slurry',
        'nuclearcraft:platinum_slurry',
        'nuclearcraft:uranium_slurry',
        'nuclearcraft:gold_clean_slurry',
        'nuclearcraft:lithium_slurry',
        'nuclearcraft:lithium_clean_slurry',
        'nuclearcraft:thorium_slurry',
        'nuclearcraft:tin_clean_slurry',
        'nuclearcraft:lead_clean_slurry',
        'nuclearcraft:lead_slurry',
        'nuclearcraft:copper_clean_slurry',
        'nuclearcraft:cobalt_clean_slurry',
        'nuclearcraft:magnesium_clean_slurry'
    ];
    const mis = [
      '_flowing',
    ];
    nc_fluids.forEach((fluids) => {
      mis.forEach((tag) => {
        event.removeAllTagsFrom(`${fluids}`),
        event.removeAllTagsFrom(`${fluids}${tag}`)
      })
    })

});