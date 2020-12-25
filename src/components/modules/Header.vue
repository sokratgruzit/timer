<template>
  <div :class="activeBurger ? 'activeBurger' : ''">
<!--    {{$store.state.activeMenu}}-->
    <header :class="firstAnimation ? 'animHead' : ''">
      <router-link
        class="logo"
        to="/"
      >
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M64.5508 24.3039L98.9315 44.1537V83.8532L64.5508 103.703L30.17 83.8532V44.1537L64.5508 24.3039Z" stroke="#1D1E4B" stroke-width="10"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="0" width="111" height="129">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M66.7912 1.45037L64.2861 0L61.7809 1.45037L11.4948 30.5633L9.00002 32.0077V34.8905V93.1164V95.9992L11.4948 97.4435L61.7809 126.557L64.2861 128.007L66.7912 126.557L117.077 97.4435L119.572 95.9992V93.1164V34.8905V32.0077L117.077 30.5633L66.7912 1.45037ZM19 84.4442V37.7732L59.2861 14.4497V45.7611C60.9628 45.2764 62.7351 45.0167 64.568 45.0167C66.1967 45.0167 67.7775 45.2218 69.2861 45.6076V14.4497L109.572 37.7732V84.4442L82.8911 68.9973C81.988 72.3189 80.2057 75.2784 77.8098 77.6104L104.593 93.1164L64.2861 116.452L23.9793 93.1164L51.1179 77.4046C48.76 75.0382 47.0226 72.0531 46.1702 68.7141L19 84.4442Z" fill="black"/>
            </mask>
            <g mask="url(#mask0)">
              <path d="M20.8812 18.0843V-3.75038L9.96386 7.16698L20.8812 18.0843Z" fill="url(#paint0_linear)"/>
              <path d="M-0.953522 -3.75038H20.8812L9.96384 7.16698L-0.953522 -3.75038Z" fill="url(#paint1_linear)"/>
              <path d="M-0.953522 -3.75038V18.0843L9.96384 7.16698L-0.953522 -3.75038Z" fill="url(#paint2_linear)"/>
              <path d="M-0.953522 18.0843H20.8812L9.96384 7.16698L-0.953522 18.0843Z" fill="url(#paint3_linear)"/>
              <path d="M20.8812 39.9191V18.0843L9.96386 29.0017L20.8812 39.9191Z" fill="url(#paint4_linear)"/>
              <path d="M-0.953522 39.9191H20.8812L9.96384 29.0017L-0.953522 39.9191Z" fill="url(#paint5_linear)"/>
              <path d="M-0.953522 18.0843H20.8812L9.96384 29.0017L-0.953522 18.0843Z" fill="url(#paint6_linear)"/>
              <path d="M-0.953522 39.9191V18.0843L9.96384 29.0017L-0.953522 39.9191Z" fill="url(#paint7_linear)"/>
              <path d="M20.8812 61.7538V39.9191L9.96386 50.8364L20.8812 61.7538Z" fill="url(#paint8_linear)"/>
              <path d="M-0.953522 39.9191H20.8812L9.96384 50.8364L-0.953522 39.9191Z" fill="url(#paint9_linear)"/>
              <path d="M-0.953522 39.9191V61.7538L9.96384 50.8364L-0.953522 39.9191Z" fill="url(#paint10_linear)"/>
              <path d="M-0.953522 61.7538H20.8812L9.96384 50.8364L-0.953522 61.7538Z" fill="url(#paint11_linear)"/>
              <path d="M20.8812 83.5885V61.7538L9.96386 72.6712L20.8812 83.5885Z" fill="url(#paint12_linear)"/>
              <path d="M-0.953522 61.7538H20.8812L9.96384 72.6712L-0.953522 61.7538Z" fill="url(#paint13_linear)"/>
              <path d="M-0.953522 83.5885V61.7538L9.96384 72.6712L-0.953522 83.5885Z" fill="url(#paint14_linear)"/>
              <path d="M-0.953522 83.5885H20.8812L9.96384 72.6712L-0.953522 83.5885Z" fill="url(#paint15_linear)"/>
              <path d="M20.8812 105.423V83.5885L9.96386 94.5059L20.8812 105.423Z" fill="url(#paint16_linear)"/>
              <path d="M-0.953522 83.5885H20.8812L9.96384 94.5059L-0.953522 83.5885Z" fill="url(#paint17_linear)"/>
              <path d="M-0.953522 83.5885V105.423L9.96384 94.5059L-0.953522 83.5885Z" fill="url(#paint18_linear)"/>
              <path d="M-0.953522 105.423H20.8812L9.96384 94.5059L-0.953522 105.423Z" fill="url(#paint19_linear)"/>
              <path d="M20.8812 127.258V105.423L9.96386 116.341L20.8812 127.258Z" fill="url(#paint20_linear)"/>
              <path d="M-0.953522 105.423H20.8812L9.96384 116.341L-0.953522 105.423Z" fill="url(#paint21_linear)"/>
              <path d="M-0.953522 127.258V105.423L9.96384 116.341L-0.953522 127.258Z" fill="url(#paint22_linear)"/>
              <path d="M-0.953522 127.258H20.8812L9.96384 116.341L-0.953522 127.258Z" fill="url(#paint23_linear)"/>
              <path d="M20.8812 149.093V127.258L9.96386 138.175L20.8812 149.093Z" fill="url(#paint24_linear)"/>
              <path d="M-0.953522 127.258H20.8812L9.96384 138.175L-0.953522 127.258Z" fill="url(#paint25_linear)"/>
              <path d="M-0.953522 127.258V149.093L9.96384 138.175L-0.953522 127.258Z" fill="url(#paint26_linear)"/>
              <path d="M20.8812 -3.75038V18.0843L31.7986 7.16698L20.8812 -3.75038Z" fill="url(#paint27_linear)"/>
              <path d="M20.8812 -3.75038H42.7159L31.7986 7.16698L20.8812 -3.75038Z" fill="url(#paint28_linear)"/>
              <path d="M20.8812 18.0843H42.7159L31.7986 7.16698L20.8812 18.0843Z" fill="url(#paint29_linear)"/>
              <path d="M42.716 18.0843V-3.75038L31.7986 7.16698L42.716 18.0843Z" fill="url(#paint30_linear)"/>
              <path d="M20.8812 39.9191H42.7159L31.7986 29.0017L20.8812 39.9191Z" fill="url(#paint31_linear)"/>
              <path d="M20.8812 39.9191V18.0843L31.7986 29.0017L20.8812 39.9191Z" fill="url(#paint32_linear)"/>
              <path d="M20.8812 18.0843H42.7159L31.7986 29.0017L20.8812 18.0843Z" fill="url(#paint33_linear)"/>
              <path d="M42.716 39.9191V18.0843L31.7986 29.0017L42.716 39.9191Z" fill="url(#paint34_linear)"/>
              <path d="M20.8812 39.9191V61.7538L31.7986 50.8364L20.8812 39.9191Z" fill="url(#paint35_linear)"/>
              <path d="M20.8812 39.9191H42.7159L31.7986 50.8364L20.8812 39.9191Z" fill="url(#paint36_linear)"/>
              <path d="M20.8812 61.7538H42.7159L31.7986 50.8364L20.8812 61.7538Z" fill="url(#paint37_linear)"/>
              <path d="M42.716 61.7538V39.9191L31.7986 50.8364L42.716 61.7538Z" fill="url(#paint38_linear)"/>
              <path d="M20.8812 83.5885V61.7538L31.7986 72.6712L20.8812 83.5885Z" fill="url(#paint39_linear)"/>
              <path d="M20.8812 61.7538H42.7159L31.7986 72.6712L20.8812 61.7538Z" fill="url(#paint40_linear)"/>
              <path d="M20.8812 83.5885H42.7159L31.7986 72.6712L20.8812 83.5885Z" fill="url(#paint41_linear)"/>
              <path d="M42.716 83.5885V61.7538L31.7986 72.6712L42.716 83.5885Z" fill="url(#paint42_linear)"/>
              <path d="M20.8812 83.5885V105.423L31.7986 94.5059L20.8812 83.5885Z" fill="url(#paint43_linear)"/>
              <path d="M20.8812 83.5885H42.7159L31.7986 94.5059L20.8812 83.5885Z" fill="url(#paint44_linear)"/>
              <path d="M20.8812 105.423H42.7159L31.7986 94.5059L20.8812 105.423Z" fill="url(#paint45_linear)"/>
              <path d="M42.716 105.423V83.5885L31.7986 94.5059L42.716 105.423Z" fill="url(#paint46_linear)"/>
              <path d="M20.8812 127.258V105.423L31.7986 116.341L20.8812 127.258Z" fill="url(#paint47_linear)"/>
              <path d="M20.8812 105.423H42.7159L31.7986 116.341L20.8812 105.423Z" fill="url(#paint48_linear)"/>
              <path d="M20.8812 127.258H42.7159L31.7986 116.341L20.8812 127.258Z" fill="url(#paint49_linear)"/>
              <path d="M42.716 127.258V105.423L31.7986 116.341L42.716 127.258Z" fill="url(#paint50_linear)"/>
              <path d="M20.8812 127.258V149.093L31.7986 138.175L20.8812 127.258Z" fill="url(#paint51_linear)"/>
              <path d="M20.8812 127.258H42.7159L31.7986 138.175L20.8812 127.258Z" fill="url(#paint52_linear)"/>
              <path d="M42.716 149.093V127.258L31.7986 138.175L42.716 149.093Z" fill="url(#paint53_linear)"/>
              <path d="M42.716 -3.75038V18.0843L53.6333 7.16698L42.716 -3.75038Z" fill="url(#paint54_linear)"/>
              <path d="M42.716 -3.75038H64.5507L53.6333 7.16698L42.716 -3.75038Z" fill="url(#paint55_linear)"/>
              <path d="M42.716 18.0843H64.5507L53.6333 7.16698L42.716 18.0843Z" fill="url(#paint56_linear)"/>
              <path d="M64.5507 18.0843V-3.75038L53.6333 7.16698L64.5507 18.0843Z" fill="url(#paint57_linear)"/>
              <path d="M42.716 39.9191H64.5507L53.6333 29.0017L42.716 39.9191Z" fill="url(#paint58_linear)"/>
              <path d="M42.716 39.9191V18.0843L53.6333 29.0017L42.716 39.9191Z" fill="url(#paint59_linear)"/>
              <path d="M42.716 18.0843H64.5507L53.6333 29.0017L42.716 18.0843Z" fill="url(#paint60_linear)"/>
              <path d="M64.5507 39.9191V18.0843L53.6333 29.0017L64.5507 39.9191Z" fill="url(#paint61_linear)"/>
              <path d="M42.716 39.9191V61.7538L53.6333 50.8364L42.716 39.9191Z" fill="url(#paint62_linear)"/>
              <path d="M42.716 39.9191H64.5507L53.6333 50.8364L42.716 39.9191Z" fill="url(#paint63_linear)"/>
              <path d="M42.716 61.7538H64.5507L53.6333 50.8364L42.716 61.7538Z" fill="url(#paint64_linear)"/>
              <path d="M64.5507 61.7538V39.9191L53.6333 50.8364L64.5507 61.7538Z" fill="url(#paint65_linear)"/>
              <path d="M42.716 83.5885V61.7538L53.6333 72.6712L42.716 83.5885Z" fill="url(#paint66_linear)"/>
              <path d="M42.716 61.7538H64.5507L53.6333 72.6712L42.716 61.7538Z" fill="url(#paint67_linear)"/>
              <path d="M42.716 83.5885H64.5507L53.6333 72.6712L42.716 83.5885Z" fill="url(#paint68_linear)"/>
              <path d="M64.5507 83.5885V61.7538L53.6333 72.6712L64.5507 83.5885Z" fill="url(#paint69_linear)"/>
              <path d="M42.716 83.5885V105.423L53.6333 94.5059L42.716 83.5885Z" fill="url(#paint70_linear)"/>
              <path d="M42.716 83.5885H64.5507L53.6333 94.5059L42.716 83.5885Z" fill="url(#paint71_linear)"/>
              <path d="M42.716 105.423H64.5507L53.6333 94.5059L42.716 105.423Z" fill="url(#paint72_linear)"/>
              <path d="M64.5507 105.423V83.5885L53.6333 94.5059L64.5507 105.423Z" fill="url(#paint73_linear)"/>
              <path d="M42.716 127.258V105.423L53.6333 116.341L42.716 127.258Z" fill="url(#paint74_linear)"/>
              <path d="M42.716 105.423H64.5507L53.6333 116.341L42.716 105.423Z" fill="url(#paint75_linear)"/>
              <path d="M42.716 127.258H64.5507L53.6333 116.341L42.716 127.258Z" fill="url(#paint76_linear)"/>
              <path d="M64.5507 127.258V105.423L53.6333 116.341L64.5507 127.258Z" fill="url(#paint77_linear)"/>
              <path d="M42.716 127.258V149.093L53.6333 138.175L42.716 127.258Z" fill="url(#paint78_linear)"/>
              <path d="M42.716 127.258H64.5507L53.6333 138.175L42.716 127.258Z" fill="url(#paint79_linear)"/>
              <path d="M64.5507 149.093V127.258L53.6333 138.175L64.5507 149.093Z" fill="url(#paint80_linear)"/>
              <path d="M64.5507 -3.75038V18.0843L75.4681 7.16698L64.5507 -3.75038Z" fill="url(#paint81_linear)"/>
              <path d="M64.5507 -3.75038H86.3854L75.4681 7.16698L64.5507 -3.75038Z" fill="url(#paint82_linear)"/>
              <path d="M64.5507 18.0843H86.3854L75.4681 7.16698L64.5507 18.0843Z" fill="url(#paint83_linear)"/>
              <path d="M86.3854 18.0843V-3.75038L75.4681 7.16698L86.3854 18.0843Z" fill="url(#paint84_linear)"/>
              <path d="M64.5507 39.9191H86.3854L75.4681 29.0017L64.5507 39.9191Z" fill="url(#paint85_linear)"/>
              <path d="M64.5507 39.9191V18.0843L75.4681 29.0017L64.5507 39.9191Z" fill="url(#paint86_linear)"/>
              <path d="M64.5507 18.0843H86.3854L75.4681 29.0017L64.5507 18.0843Z" fill="url(#paint87_linear)"/>
              <path d="M86.3854 39.9191V18.0843L75.4681 29.0017L86.3854 39.9191Z" fill="url(#paint88_linear)"/>
              <path d="M64.5507 39.9191V61.7538L75.4681 50.8364L64.5507 39.9191Z" fill="url(#paint89_linear)"/>
              <path d="M64.5507 39.9191H86.3854L75.4681 50.8364L64.5507 39.9191Z" fill="url(#paint90_linear)"/>
              <path d="M64.5507 61.7538H86.3854L75.4681 50.8364L64.5507 61.7538Z" fill="url(#paint91_linear)"/>
              <path d="M86.3854 61.7538V39.9191L75.4681 50.8364L86.3854 61.7538Z" fill="url(#paint92_linear)"/>
              <path d="M64.5507 83.5885V61.7538L75.4681 72.6712L64.5507 83.5885Z" fill="url(#paint93_linear)"/>
              <path d="M64.5507 61.7538H86.3854L75.4681 72.6712L64.5507 61.7538Z" fill="url(#paint94_linear)"/>
              <path d="M64.5507 83.5885H86.3854L75.4681 72.6712L64.5507 83.5885Z" fill="url(#paint95_linear)"/>
              <path d="M86.3854 83.5885V61.7538L75.4681 72.6712L86.3854 83.5885Z" fill="url(#paint96_linear)"/>
              <path d="M64.5507 83.5885V105.423L75.4681 94.5059L64.5507 83.5885Z" fill="url(#paint97_linear)"/>
              <path d="M64.5507 83.5885H86.3854L75.4681 94.5059L64.5507 83.5885Z" fill="url(#paint98_linear)"/>
              <path d="M64.5507 105.423H86.3854L75.4681 94.5059L64.5507 105.423Z" fill="url(#paint99_linear)"/>
              <path d="M86.3854 105.423V83.5885L75.4681 94.5059L86.3854 105.423Z" fill="url(#paint100_linear)"/>
              <path d="M64.5507 127.258V105.423L75.4681 116.341L64.5507 127.258Z" fill="url(#paint101_linear)"/>
              <path d="M64.5507 105.423H86.3854L75.4681 116.341L64.5507 105.423Z" fill="url(#paint102_linear)"/>
              <path d="M64.5507 127.258H86.3854L75.4681 116.341L64.5507 127.258Z" fill="url(#paint103_linear)"/>
              <path d="M86.3854 127.258V105.423L75.4681 116.341L86.3854 127.258Z" fill="url(#paint104_linear)"/>
              <path d="M64.5507 127.258V149.093L75.4681 138.175L64.5507 127.258Z" fill="url(#paint105_linear)"/>
              <path d="M64.5507 127.258H86.3854L75.4681 138.175L64.5507 127.258Z" fill="url(#paint106_linear)"/>
              <path d="M86.3854 149.093V127.258L75.4681 138.175L86.3854 149.093Z" fill="url(#paint107_linear)"/>
              <path d="M86.3854 -3.75038V18.0843L97.3028 7.16698L86.3854 -3.75038Z" fill="url(#paint108_linear)"/>
              <path d="M86.3854 -3.75038H108.22L97.3028 7.16698L86.3854 -3.75038Z" fill="url(#paint109_linear)"/>
              <path d="M86.3854 18.0843H108.22L97.3028 7.16698L86.3854 18.0843Z" fill="url(#paint110_linear)"/>
              <path d="M108.22 18.0843V-3.75038L97.3028 7.16698L108.22 18.0843Z" fill="url(#paint111_linear)"/>
              <path d="M86.3854 39.9191H108.22L97.3028 29.0017L86.3854 39.9191Z" fill="url(#paint112_linear)"/>
              <path d="M86.3854 39.9191V18.0843L97.3028 29.0017L86.3854 39.9191Z" fill="url(#paint113_linear)"/>
              <path d="M86.3854 18.0843H108.22L97.3028 29.0017L86.3854 18.0843Z" fill="url(#paint114_linear)"/>
              <path d="M108.22 39.9191V18.0843L97.3028 29.0017L108.22 39.9191Z" fill="url(#paint115_linear)"/>
              <path d="M86.3854 39.9191V61.7538L97.3028 50.8364L86.3854 39.9191Z" fill="url(#paint116_linear)"/>
              <path d="M86.3854 39.9191H108.22L97.3028 50.8364L86.3854 39.9191Z" fill="url(#paint117_linear)"/>
              <path d="M86.3854 61.7538H108.22L97.3028 50.8364L86.3854 61.7538Z" fill="url(#paint118_linear)"/>
              <path d="M108.22 61.7538V39.9191L97.3028 50.8364L108.22 61.7538Z" fill="url(#paint119_linear)"/>
              <path d="M86.3854 83.5885V61.7538L97.3028 72.6712L86.3854 83.5885Z" fill="url(#paint120_linear)"/>
              <path d="M86.3854 61.7538H108.22L97.3028 72.6712L86.3854 61.7538Z" fill="url(#paint121_linear)"/>
              <path d="M86.3854 83.5885H108.22L97.3028 72.6712L86.3854 83.5885Z" fill="url(#paint122_linear)"/>
              <path d="M108.22 83.5885V61.7538L97.3028 72.6712L108.22 83.5885Z" fill="url(#paint123_linear)"/>
              <path d="M86.3854 83.5885V105.423L97.3028 94.5059L86.3854 83.5885Z" fill="url(#paint124_linear)"/>
              <path d="M86.3854 83.5885H108.22L97.3028 94.5059L86.3854 83.5885Z" fill="url(#paint125_linear)"/>
              <path d="M86.3854 105.423H108.22L97.3028 94.5059L86.3854 105.423Z" fill="url(#paint126_linear)"/>
              <path d="M108.22 105.423V83.5885L97.3028 94.5059L108.22 105.423Z" fill="url(#paint127_linear)"/>
              <path d="M86.3854 127.258V105.423L97.3028 116.341L86.3854 127.258Z" fill="url(#paint128_linear)"/>
              <path d="M86.3854 105.423H108.22L97.3028 116.341L86.3854 105.423Z" fill="url(#paint129_linear)"/>
              <path d="M86.3854 127.258H108.22L97.3028 116.341L86.3854 127.258Z" fill="url(#paint130_linear)"/>
              <path d="M108.22 127.258V105.423L97.3028 116.341L108.22 127.258Z" fill="url(#paint131_linear)"/>
              <path d="M86.3854 127.258V149.093L97.3028 138.175L86.3854 127.258Z" fill="url(#paint132_linear)"/>
              <path d="M86.3854 127.258H108.22L97.3028 138.175L86.3854 127.258Z" fill="url(#paint133_linear)"/>
              <path d="M108.22 149.093V127.258L97.3028 138.175L108.22 149.093Z" fill="url(#paint134_linear)"/>
              <path d="M108.22 -3.75038V18.0843L119.138 7.16698L108.22 -3.75038Z" fill="url(#paint135_linear)"/>
              <path d="M108.22 -3.75038H130.055L119.138 7.16698L108.22 -3.75038Z" fill="url(#paint136_linear)"/>
              <path d="M108.22 18.0843H130.055L119.138 7.16698L108.22 18.0843Z" fill="url(#paint137_linear)"/>
              <path d="M130.055 18.0843V-3.75038L119.137 7.16698L130.055 18.0843Z" fill="url(#paint138_linear)"/>
              <path d="M108.22 39.9191H130.055L119.138 29.0017L108.22 39.9191Z" fill="url(#paint139_linear)"/>
              <path d="M108.22 39.9191V18.0843L119.138 29.0017L108.22 39.9191Z" fill="url(#paint140_linear)"/>
              <path d="M108.22 18.0843H130.055L119.138 29.0017L108.22 18.0843Z" fill="url(#paint141_linear)"/>
              <path d="M130.055 39.9191V18.0843L119.137 29.0017L130.055 39.9191Z" fill="url(#paint142_linear)"/>
              <path d="M108.22 39.9191V61.7538L119.138 50.8364L108.22 39.9191Z" fill="url(#paint143_linear)"/>
              <path d="M108.22 39.9191H130.055L119.138 50.8364L108.22 39.9191Z" fill="url(#paint144_linear)"/>
              <path d="M108.22 61.7538H130.055L119.138 50.8364L108.22 61.7538Z" fill="url(#paint145_linear)"/>
              <path d="M130.055 61.7538V39.9191L119.137 50.8364L130.055 61.7538Z" fill="url(#paint146_linear)"/>
              <path d="M108.22 83.5885V61.7538L119.138 72.6712L108.22 83.5885Z" fill="url(#paint147_linear)"/>
              <path d="M108.22 61.7538H130.055L119.138 72.6712L108.22 61.7538Z" fill="url(#paint148_linear)"/>
              <path d="M108.22 83.5885H130.055L119.138 72.6712L108.22 83.5885Z" fill="url(#paint149_linear)"/>
              <path d="M130.055 83.5885V61.7538L119.137 72.6712L130.055 83.5885Z" fill="url(#paint150_linear)"/>
              <path d="M108.22 83.5885V105.423L119.138 94.5059L108.22 83.5885Z" fill="url(#paint151_linear)"/>
              <path d="M108.22 83.5885H130.055L119.138 94.5059L108.22 83.5885Z" fill="url(#paint152_linear)"/>
              <path d="M108.22 105.423H130.055L119.138 94.5059L108.22 105.423Z" fill="url(#paint153_linear)"/>
              <path d="M130.055 105.423V83.5885L119.137 94.5059L130.055 105.423Z" fill="url(#paint154_linear)"/>
              <path d="M108.22 127.258V105.423L119.138 116.341L108.22 127.258Z" fill="url(#paint155_linear)"/>
              <path d="M108.22 105.423H130.055L119.138 116.341L108.22 105.423Z" fill="url(#paint156_linear)"/>
              <path d="M108.22 127.258H130.055L119.138 116.341L108.22 127.258Z" fill="url(#paint157_linear)"/>
              <path d="M130.055 127.258V105.423L119.137 116.341L130.055 127.258Z" fill="url(#paint158_linear)"/>
              <path d="M108.22 127.258V149.093L119.138 138.175L108.22 127.258Z" fill="url(#paint159_linear)"/>
              <path d="M108.22 127.258H130.055L119.138 138.175L108.22 127.258Z" fill="url(#paint160_linear)"/>
              <path d="M130.055 149.093V127.258L119.137 138.175L130.055 149.093Z" fill="url(#paint161_linear)"/>
            </g>
            <circle cx="64.2515" cy="64.0034" r="21.4548" stroke="#1D1E4B" stroke-width="10"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2515 90.4583C72.3104 90.4583 79.5276 86.8548 84.3798 81.1713C80.4974 80.7857 76.9935 79.1131 74.3011 76.5861C71.5465 78.7891 68.0527 80.1064 64.2512 80.1064C55.3578 80.1064 48.1483 72.8968 48.1483 64.0034C48.1483 55.11 55.3578 47.9005 64.2512 47.9005C64.3795 47.9005 64.5075 47.902 64.6351 47.905C63.872 48.7752 63.1139 49.8014 62.7566 50.3159L72.5333 53.364C72.9934 52.7659 73.9136 51.8112 74.3162 51.4086L74.315 51.4077C77.0056 48.888 80.504 47.2205 84.3798 46.8355C79.5276 41.152 72.3104 37.5486 64.2515 37.5486C49.6409 37.5486 37.7967 49.3928 37.7967 64.0034C37.7967 78.614 49.6409 90.4583 64.2515 90.4583Z" fill="#1D1E4B"/>
            <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="37" y="37" width="48" height="54">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2515 90.4583C72.3104 90.4583 79.5276 86.8548 84.3798 81.1713C80.4974 80.7857 76.9935 79.1131 74.3011 76.5861C71.5465 78.7891 68.0527 80.1064 64.2512 80.1064C55.3578 80.1064 48.1483 72.8968 48.1483 64.0034C48.1483 55.11 55.3578 47.9005 64.2512 47.9005C64.3795 47.9005 64.5075 47.902 64.6351 47.905C63.872 48.7752 63.1139 49.8014 62.7566 50.3159L72.5333 53.364C72.9934 52.7659 73.9136 51.8112 74.3162 51.4086L74.315 51.4077C77.0056 48.888 80.504 47.2205 84.3798 46.8355C79.5276 41.152 72.3104 37.5486 64.2515 37.5486C49.6409 37.5486 37.7967 49.3928 37.7967 64.0034C37.7967 78.614 49.6409 90.4583 64.2515 90.4583Z" fill="#364D5B"/>
            </mask>
            <g mask="url(#mask1)">
              <path d="M65.4016 63.7734L33.3108 77.5759L59.6506 92.4136L76.5587 91.1484L80.0093 82.6368L65.4016 63.7734Z" fill="url(#paint162_linear)"/>
            </g>
            <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="37" y="37" width="48" height="54">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2515 90.4583C72.3104 90.4583 79.5276 86.8548 84.3798 81.1713C80.4974 80.7857 76.9935 79.1131 74.3011 76.5861C71.5465 78.7891 68.0527 80.1064 64.2512 80.1064C55.3578 80.1064 48.1483 72.8968 48.1483 64.0034C48.1483 55.11 55.3578 47.9005 64.2512 47.9005C64.3795 47.9005 64.5075 47.902 64.6351 47.905C63.872 48.7752 63.1139 49.8014 62.7566 50.3159L72.5333 53.364C72.9934 52.7659 73.9136 51.8112 74.3162 51.4086L74.315 51.4077C77.0056 48.888 80.504 47.2205 84.3798 46.8355C79.5276 41.152 72.3104 37.5486 64.2515 37.5486C49.6409 37.5486 37.7967 49.3928 37.7967 64.0034C37.7967 78.614 49.6409 90.4583 64.2515 90.4583Z" fill="#364D5B"/>
            </mask>
            <g mask="url(#mask2)">
              <path d="M49.7586 61.703C48.6544 55.9059 41.4004 46.3285 37.9114 42.2644L35.726 62.5081L36.7612 73.2051L51.5989 90.8033C51.4455 83.0202 50.8628 67.5 49.7586 61.703Z" fill="url(#paint163_linear)"/>
            </g>
            <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="37" y="37" width="48" height="54">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2515 90.4583C72.3104 90.4583 79.5276 86.8548 84.3798 81.1713C80.4974 80.7857 76.9935 79.1131 74.3011 76.5861C71.5465 78.7891 68.0527 80.1064 64.2512 80.1064C55.3578 80.1064 48.1483 72.8968 48.1483 64.0034C48.1483 55.11 55.3578 47.9005 64.2512 47.9005C64.3795 47.9005 64.5075 47.902 64.6351 47.905C63.872 48.7752 63.1139 49.8014 62.7566 50.3159L72.5333 53.364C72.9934 52.7659 73.9136 51.8112 74.3162 51.4086L74.315 51.4077C77.0056 48.888 80.504 47.2205 84.3798 46.8355C79.5276 41.152 72.3104 37.5486 64.2515 37.5486C49.6409 37.5486 37.7967 49.3928 37.7967 64.0034C37.7967 78.614 49.6409 90.4583 64.2515 90.4583Z" fill="#364D5B"/>
            </mask>
            <g mask="url(#mask3)">
              <path d="M49.1842 58.3674C56.4535 43.8287 75.0639 41.1142 83.4605 41.5743L69.1979 31.6825L38.7173 35.8233L33.7714 47.9005V81.1415L46.3087 100.12C44.2383 92.2602 41.9149 72.906 49.1842 58.3674Z" fill="url(#paint164_linear)"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.2519 50.2009C67.4466 50.2009 70.3878 51.2863 72.7269 53.1084C70.9167 55.3285 69.6482 58.0077 69.1227 60.9445C68.1049 59.3272 66.3039 58.2524 64.2518 58.2524C61.0756 58.2524 58.5007 60.8272 58.5007 64.0034C58.5007 67.1797 61.0756 69.7545 64.2518 69.7545C66.3039 69.7545 68.1049 68.6797 69.1227 67.0624C69.6427 69.9684 70.8903 72.6223 72.6703 74.8287C73.217 75.4722 73.9463 76.2288 74.3157 76.5982C77.7203 79.9568 82.4055 81.0649 84.3225 81.1991C81.9761 84.1896 78.2072 86.5859 76.6161 87.4102C72.5214 86.536 68.4305 83.672 66.8968 82.3493C66.7051 82.1959 66.0687 81.6247 65.0565 80.5665C64.2125 79.6841 63.3099 78.4739 62.7887 77.7293C55.8536 76.9986 50.4493 71.1321 50.4493 64.0034C50.4493 56.3805 56.6289 50.2009 64.2519 50.2009Z" fill="url(#paint165_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="11.3285" y1="-6.47972" x2="28.7963" y2="2.25417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CE92FC"/>
              <stop offset="1" stop-color="#C379FA"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.77582" y1="-5.11505" x2="10.5097" y2="12.3527" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7417D3"/>
              <stop offset="1" stop-color="#B458FA"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="-2.31819" y1="-1.02104" x2="15.1496" y2="7.71285" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8A41D1"/>
              <stop offset="1" stop-color="#C47DF8"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="-3.68286" y1="8.53166" x2="5.05103" y2="25.9994" gradientUnits="userSpaceOnUse">
              <stop stop-color="#BF77F9"/>
              <stop offset="1" stop-color="#CE90FB"/>
            </linearGradient>
            <linearGradient id="paint4_linear" x1="11.3285" y1="15.355" x2="28.7963" y2="24.0889" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7510D4"/>
              <stop offset="1" stop-color="#913CDC"/>
            </linearGradient>
            <linearGradient id="paint5_linear" x1="-3.68286" y1="30.3664" x2="5.05103" y2="47.8342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B65EFC"/>
              <stop offset="1" stop-color="#811FE2"/>
            </linearGradient>
            <linearGradient id="paint6_linear" x1="1.77582" y1="16.7197" x2="10.5097" y2="34.1875" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A957F1"/>
              <stop offset="1" stop-color="#9C4BE7"/>
            </linearGradient>
            <linearGradient id="paint7_linear" x1="-2.31819" y1="20.8137" x2="15.1496" y2="29.5476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A137FB"/>
              <stop offset="1" stop-color="#8A26EA"/>
            </linearGradient>
            <linearGradient id="paint8_linear" x1="11.3285" y1="37.1897" x2="28.7963" y2="45.9236" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7717CD"/>
              <stop offset="1" stop-color="#8E2AE4"/>
            </linearGradient>
            <linearGradient id="paint9_linear" x1="1.77582" y1="38.5544" x2="10.5097" y2="56.0222" gradientUnits="userSpaceOnUse">
              <stop stop-color="#AD4BFB"/>
              <stop offset="1" stop-color="#932FEE"/>
            </linearGradient>
            <linearGradient id="paint10_linear" x1="-2.31819" y1="42.6484" x2="15.1496" y2="51.3823" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B855FC"/>
              <stop offset="1" stop-color="#9938E6"/>
            </linearGradient>
            <linearGradient id="paint11_linear" x1="-3.68286" y1="52.2011" x2="5.05103" y2="69.6689" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8221DB"/>
              <stop offset="1" stop-color="#8F31E0"/>
            </linearGradient>
            <linearGradient id="paint12_linear" x1="11.3285" y1="59.0245" x2="28.7963" y2="67.7584" gradientUnits="userSpaceOnUse">
              <stop stop-color="#590699"/>
              <stop offset="1" stop-color="#5D05AA"/>
            </linearGradient>
            <linearGradient id="paint13_linear" x1="1.77582" y1="60.3891" x2="10.5097" y2="77.8569" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6807C1"/>
              <stop offset="1" stop-color="#6304B9"/>
            </linearGradient>
            <linearGradient id="paint14_linear" x1="-2.31819" y1="64.4832" x2="15.1496" y2="73.217" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8216D6"/>
              <stop offset="1" stop-color="#6D07C9"/>
            </linearGradient>
            <linearGradient id="paint15_linear" x1="-3.68286" y1="74.0358" x2="5.05103" y2="91.5036" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7B16C6"/>
              <stop offset="1" stop-color="#6506B2"/>
            </linearGradient>
            <linearGradient id="paint16_linear" x1="11.3285" y1="80.8592" x2="28.7963" y2="89.5931" gradientUnits="userSpaceOnUse">
              <stop stop-color="#340262"/>
              <stop offset="1" stop-color="#490582"/>
            </linearGradient>
            <linearGradient id="paint17_linear" x1="1.77582" y1="82.2239" x2="10.5097" y2="99.6917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7114B1"/>
              <stop offset="1" stop-color="#570796"/>
            </linearGradient>
            <linearGradient id="paint18_linear" x1="-2.31819" y1="86.3179" x2="15.1496" y2="95.0518" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7721B3"/>
              <stop offset="1" stop-color="#4A0D7F"/>
            </linearGradient>
            <linearGradient id="paint19_linear" x1="-3.68286" y1="95.8706" x2="5.05103" y2="113.338" gradientUnits="userSpaceOnUse">
              <stop stop-color="#310360"/>
              <stop offset="1" stop-color="#3E0670"/>
            </linearGradient>
            <linearGradient id="paint20_linear" x1="11.3285" y1="102.694" x2="28.7963" y2="111.428" gradientUnits="userSpaceOnUse">
              <stop stop-color="#17012A"/>
              <stop offset="1" stop-color="#2A0947"/>
            </linearGradient>
            <linearGradient id="paint21_linear" x1="1.77582" y1="104.059" x2="10.5097" y2="121.526" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2B0554"/>
              <stop offset="1" stop-color="#310C55"/>
            </linearGradient>
            <linearGradient id="paint22_linear" x1="-2.31819" y1="108.153" x2="15.1496" y2="116.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2E0A4A"/>
              <stop offset="1" stop-color="#320E52"/>
            </linearGradient>
            <linearGradient id="paint23_linear" x1="-3.68286" y1="117.705" x2="5.05103" y2="135.173" gradientUnits="userSpaceOnUse">
              <stop stop-color="#23063C"/>
              <stop offset="1" stop-color="#240C3A"/>
            </linearGradient>
            <linearGradient id="paint24_linear" x1="11.3285" y1="124.529" x2="28.7963" y2="133.263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0B0212"/>
              <stop offset="1" stop-color="#12001E"/>
            </linearGradient>
            <linearGradient id="paint25_linear" x1="1.77582" y1="125.893" x2="10.5097" y2="143.361" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1D0231"/>
              <stop offset="1" stop-color="#150121"/>
            </linearGradient>
            <linearGradient id="paint26_linear" x1="-2.31819" y1="129.987" x2="15.1496" y2="138.721" gradientUnits="userSpaceOnUse">
              <stop stop-color="#19012D"/>
              <stop offset="1" stop-color="#0E0018"/>
            </linearGradient>
            <linearGradient id="paint27_linear" x1="19.5165" y1="-1.02104" x2="36.9843" y2="7.71285" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B65EFB"/>
              <stop offset="1" stop-color="#C680FD"/>
            </linearGradient>
            <linearGradient id="paint28_linear" x1="23.6106" y1="-5.11505" x2="32.3445" y2="12.3527" gradientUnits="userSpaceOnUse">
              <stop stop-color="#BC64FA"/>
              <stop offset="1" stop-color="#C97FFA"/>
            </linearGradient>
            <linearGradient id="paint29_linear" x1="18.1519" y1="8.53166" x2="26.8858" y2="25.9994" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C781FC"/>
              <stop offset="1" stop-color="#BA65FB"/>
            </linearGradient>
            <linearGradient id="paint30_linear" x1="33.1633" y1="-6.47972" x2="50.6311" y2="2.25417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9832F4"/>
              <stop offset="1" stop-color="#B15FF5"/>
            </linearGradient>
            <linearGradient id="paint31_linear" x1="18.1519" y1="30.3664" x2="26.8858" y2="47.8342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8929E1"/>
              <stop offset="1" stop-color="#9C35E5"/>
            </linearGradient>
            <linearGradient id="paint32_linear" x1="19.5165" y1="20.8137" x2="36.9843" y2="29.5476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#720EE1"/>
              <stop offset="1" stop-color="#9E3EF1"/>
            </linearGradient>
            <linearGradient id="paint33_linear" x1="23.6106" y1="16.7197" x2="32.3445" y2="34.1875" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C475FD"/>
              <stop offset="1" stop-color="#A837F9"/>
            </linearGradient>
            <linearGradient id="paint34_linear" x1="33.1633" y1="15.355" x2="50.6311" y2="24.0889" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8C2EE3"/>
              <stop offset="1" stop-color="#9523F4"/>
            </linearGradient>
            <linearGradient id="paint35_linear" x1="19.5165" y1="42.6484" x2="36.9843" y2="51.3823" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6707BA"/>
              <stop offset="1" stop-color="#6D1CB8"/>
            </linearGradient>
            <linearGradient id="paint36_linear" x1="23.6106" y1="38.5544" x2="32.3445" y2="56.0222" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7112D3"/>
              <stop offset="1" stop-color="#8738D2"/>
            </linearGradient>
            <linearGradient id="paint37_linear" x1="18.1519" y1="52.2011" x2="26.8858" y2="69.6689" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6812BE"/>
              <stop offset="1" stop-color="#651FAF"/>
            </linearGradient>
            <linearGradient id="paint38_linear" x1="33.1633" y1="37.1897" x2="50.6311" y2="45.9236" gradientUnits="userSpaceOnUse">
              <stop stop-color="#682BA1"/>
              <stop offset="1" stop-color="#9249D2"/>
            </linearGradient>
            <linearGradient id="paint39_linear" x1="19.5165" y1="64.4832" x2="36.9843" y2="73.217" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5B1198"/>
              <stop offset="1" stop-color="#610EAB"/>
            </linearGradient>
            <linearGradient id="paint40_linear" x1="23.6106" y1="60.3891" x2="32.3445" y2="77.8569" gradientUnits="userSpaceOnUse">
              <stop stop-color="#680EBE"/>
              <stop offset="1" stop-color="#5A09A4"/>
            </linearGradient>
            <linearGradient id="paint41_linear" x1="18.1519" y1="74.0358" x2="26.8858" y2="91.5036" gradientUnits="userSpaceOnUse">
              <stop stop-color="#580B98"/>
              <stop offset="1" stop-color="#5C129A"/>
            </linearGradient>
            <linearGradient id="paint42_linear" x1="33.1633" y1="59.0245" x2="50.6311" y2="67.7584" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5D1697"/>
              <stop offset="1" stop-color="#56069B"/>
            </linearGradient>
            <linearGradient id="paint43_linear" x1="19.5165" y1="86.3179" x2="36.9843" y2="95.0518" gradientUnits="userSpaceOnUse">
              <stop stop-color="#490584"/>
              <stop offset="1" stop-color="#380A64"/>
            </linearGradient>
            <linearGradient id="paint44_linear" x1="23.6106" y1="82.2239" x2="32.3445" y2="99.6917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#460682"/>
              <stop offset="1" stop-color="#431570"/>
            </linearGradient>
            <linearGradient id="paint45_linear" x1="18.1519" y1="95.8706" x2="26.8858" y2="113.338" gradientUnits="userSpaceOnUse">
              <stop stop-color="#36105D"/>
              <stop offset="1" stop-color="#391B59"/>
            </linearGradient>
            <linearGradient id="paint46_linear" x1="33.1633" y1="80.8592" x2="50.6311" y2="89.5931" gradientUnits="userSpaceOnUse">
              <stop stop-color="#32134A"/>
              <stop offset="1" stop-color="#421667"/>
            </linearGradient>
            <linearGradient id="paint47_linear" x1="19.5165" y1="108.153" x2="36.9843" y2="116.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1E0732"/>
              <stop offset="1" stop-color="#2C0C49"/>
            </linearGradient>
            <linearGradient id="paint48_linear" x1="23.6106" y1="104.059" x2="32.3445" y2="121.526" gradientUnits="userSpaceOnUse">
              <stop stop-color="#360C58"/>
              <stop offset="1" stop-color="#33174B"/>
            </linearGradient>
            <linearGradient id="paint49_linear" x1="18.1519" y1="117.705" x2="26.8858" y2="135.173" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B082B"/>
              <stop offset="1" stop-color="#200E2F"/>
            </linearGradient>
            <linearGradient id="paint50_linear" x1="33.1633" y1="102.694" x2="50.6311" y2="111.428" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1D0E28"/>
              <stop offset="1" stop-color="#2C1640"/>
            </linearGradient>
            <linearGradient id="paint51_linear" x1="19.5165" y1="129.987" x2="36.9843" y2="138.721" gradientUnits="userSpaceOnUse">
              <stop stop-color="#130120"/>
              <stop offset="1" stop-color="#0C0212"/>
            </linearGradient>
            <linearGradient id="paint52_linear" x1="23.6106" y1="125.893" x2="32.3445" y2="143.361" gradientUnits="userSpaceOnUse">
              <stop stop-color="#110122"/>
              <stop offset="1" stop-color="#0F041A"/>
            </linearGradient>
            <linearGradient id="paint53_linear" x1="33.1633" y1="124.529" x2="50.6311" y2="133.263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#040009"/>
              <stop offset="1" stop-color="#0E0416"/>
            </linearGradient>
            <linearGradient id="paint54_linear" x1="41.3513" y1="-1.02104" x2="58.8191" y2="7.71285" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A74FEA"/>
              <stop offset="1" stop-color="#9427F1"/>
            </linearGradient>
            <linearGradient id="paint55_linear" x1="45.4453" y1="-5.11505" x2="54.1792" y2="12.3527" gradientUnits="userSpaceOnUse">
              <stop stop-color="#AD4DF9"/>
              <stop offset="1" stop-color="#790DDE"/>
            </linearGradient>
            <linearGradient id="paint56_linear" x1="39.9866" y1="8.53166" x2="48.7205" y2="25.9994" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A239FB"/>
              <stop offset="1" stop-color="#9222EE"/>
            </linearGradient>
            <linearGradient id="paint57_linear" x1="54.998" y1="-6.47972" x2="72.4658" y2="2.25417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9320E9"/>
              <stop offset="1" stop-color="#7D0FDF"/>
            </linearGradient>
            <linearGradient id="paint58_linear" x1="39.9866" y1="30.3664" x2="48.7205" y2="47.8342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9442D3"/>
              <stop offset="1" stop-color="#7B25C1"/>
            </linearGradient>
            <linearGradient id="paint59_linear" x1="41.3513" y1="20.8137" x2="58.8191" y2="29.5476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8F3FCF"/>
              <stop offset="1" stop-color="#8F2EDC"/>
            </linearGradient>
            <linearGradient id="paint60_linear" x1="45.4453" y1="16.7197" x2="54.1792" y2="34.1875" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A43EF5"/>
              <stop offset="1" stop-color="#8C21DC"/>
            </linearGradient>
            <linearGradient id="paint61_linear" x1="54.998" y1="15.355" x2="72.4658" y2="24.0889" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6C1CB8"/>
              <stop offset="1" stop-color="#7D16D1"/>
            </linearGradient>
            <linearGradient id="paint62_linear" x1="41.3513" y1="42.6484" x2="58.8191" y2="51.3823" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8F43D3"/>
              <stop offset="1" stop-color="#672DA3"/>
            </linearGradient>
            <linearGradient id="paint63_linear" x1="45.4453" y1="38.5544" x2="54.1792" y2="56.0222" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9653CF"/>
              <stop offset="1" stop-color="#7C45AE"/>
            </linearGradient>
            <linearGradient id="paint64_linear" x1="39.9866" y1="52.2011" x2="48.7205" y2="69.6689" gradientUnits="userSpaceOnUse">
              <stop stop-color="#300268"/>
              <stop offset="1" stop-color="#511D83"/>
            </linearGradient>
            <linearGradient id="paint65_linear" x1="54.998" y1="37.1897" x2="72.4658" y2="45.9236" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3A0865"/>
              <stop offset="1" stop-color="#55277F"/>
            </linearGradient>
            <linearGradient id="paint66_linear" x1="41.3513" y1="64.4832" x2="58.8191" y2="73.217" gradientUnits="userSpaceOnUse">
              <stop stop-color="#501185"/>
              <stop offset="1" stop-color="#450282"/>
            </linearGradient>
            <linearGradient id="paint67_linear" x1="45.4453" y1="60.3891" x2="54.1792" y2="77.8569" gradientUnits="userSpaceOnUse">
              <stop stop-color="#460887"/>
              <stop offset="1" stop-color="#520A90"/>
            </linearGradient>
            <linearGradient id="paint68_linear" x1="39.9866" y1="74.0358" x2="48.7205" y2="91.5036" gradientUnits="userSpaceOnUse">
              <stop stop-color="#561988"/>
              <stop offset="1" stop-color="#490A7E"/>
            </linearGradient>
            <linearGradient id="paint69_linear" x1="54.998" y1="59.0245" x2="72.4658" y2="67.7584" gradientUnits="userSpaceOnUse">
              <stop stop-color="#460B77"/>
              <stop offset="1" stop-color="#510A8B"/>
            </linearGradient>
            <linearGradient id="paint70_linear" x1="41.3513" y1="86.3179" x2="58.8191" y2="95.0518" gradientUnits="userSpaceOnUse">
              <stop stop-color="#491575"/>
              <stop offset="1" stop-color="#350F56"/>
            </linearGradient>
            <linearGradient id="paint71_linear" x1="45.4453" y1="82.2239" x2="54.1792" y2="99.6917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4F197B"/>
              <stop offset="1" stop-color="#3C0C63"/>
            </linearGradient>
            <linearGradient id="paint72_linear" x1="39.9866" y1="95.8706" x2="48.7205" y2="113.338" gradientUnits="userSpaceOnUse">
              <stop stop-color="#250F3C"/>
              <stop offset="1" stop-color="#23063C"/>
            </linearGradient>
            <linearGradient id="paint73_linear" x1="54.998" y1="80.8592" x2="72.4658" y2="89.5931" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2C0846"/>
              <stop offset="1" stop-color="#370A5B"/>
            </linearGradient>
            <linearGradient id="paint74_linear" x1="41.3513" y1="108.153" x2="58.8191" y2="116.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1D0F28"/>
              <stop offset="1" stop-color="#211030"/>
            </linearGradient>
            <linearGradient id="paint75_linear" x1="45.4453" y1="104.059" x2="54.1792" y2="121.526" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2C1143"/>
              <stop offset="1" stop-color="#1A042B"/>
            </linearGradient>
            <linearGradient id="paint76_linear" x1="39.9866" y1="117.705" x2="48.7205" y2="135.173" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0F0517"/>
              <stop offset="1" stop-color="#0B0112"/>
            </linearGradient>
            <linearGradient id="paint77_linear" x1="54.998" y1="102.694" x2="72.4658" y2="111.428" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0F031A"/>
              <stop offset="1" stop-color="#140321"/>
            </linearGradient>
            <linearGradient id="paint78_linear" x1="41.3513" y1="129.987" x2="58.8191" y2="138.721" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0515"/>
              <stop offset="1" stop-color="#040008"/>
            </linearGradient>
            <linearGradient id="paint79_linear" x1="45.4453" y1="125.893" x2="54.1792" y2="143.361" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0F0518"/>
              <stop offset="1" stop-color="#090110"/>
            </linearGradient>
            <linearGradient id="paint80_linear" x1="54.998" y1="124.529" x2="72.4658" y2="133.263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#040107"/>
              <stop offset="1" stop-color="#08020E"/>
            </linearGradient>
            <linearGradient id="paint81_linear" x1="63.186" y1="-1.02104" x2="80.6538" y2="7.71285" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6607C2"/>
              <stop offset="1" stop-color="#7E16D5"/>
            </linearGradient>
            <linearGradient id="paint82_linear" x1="67.28" y1="-5.11505" x2="76.0139" y2="12.3527" gradientUnits="userSpaceOnUse">
              <stop stop-color="#51059C"/>
              <stop offset="1" stop-color="#5B07A6"/>
            </linearGradient>
            <linearGradient id="paint83_linear" x1="61.8214" y1="8.53166" x2="70.5553" y2="25.9994" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7E1FC7"/>
              <stop offset="1" stop-color="#640AB2"/>
            </linearGradient>
            <linearGradient id="paint84_linear" x1="76.8327" y1="-6.47972" x2="94.3005" y2="2.25417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5A03A5"/>
              <stop offset="1" stop-color="#6207B2"/>
            </linearGradient>
            <linearGradient id="paint85_linear" x1="61.8214" y1="30.3664" x2="70.5553" y2="47.8342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6A27A5"/>
              <stop offset="1" stop-color="#561587"/>
            </linearGradient>
            <linearGradient id="paint86_linear" x1="63.186" y1="20.8137" x2="80.6538" y2="29.5476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#571F83"/>
              <stop offset="1" stop-color="#5B158B"/>
            </linearGradient>
            <linearGradient id="paint87_linear" x1="67.28" y1="16.7197" x2="76.0139" y2="34.1875" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7019B3"/>
              <stop offset="1" stop-color="#4A0284"/>
            </linearGradient>
            <linearGradient id="paint88_linear" x1="76.8327" y1="15.355" x2="94.3005" y2="24.0889" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5E1C93"/>
              <stop offset="1" stop-color="#500A8A"/>
            </linearGradient>
            <linearGradient id="paint89_linear" x1="63.186" y1="42.6484" x2="80.6538" y2="51.3823" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6A2C9F"/>
              <stop offset="1" stop-color="#58148E"/>
            </linearGradient>
            <linearGradient id="paint90_linear" x1="67.28" y1="38.5544" x2="76.0139" y2="56.0222" gradientUnits="userSpaceOnUse">
              <stop stop-color="#621EA1"/>
              <stop offset="1" stop-color="#54108C"/>
            </linearGradient>
            <linearGradient id="paint91_linear" x1="61.8214" y1="52.2011" x2="70.5553" y2="69.6689" gradientUnits="userSpaceOnUse">
              <stop stop-color="#58188B"/>
              <stop offset="1" stop-color="#440C72"/>
            </linearGradient>
            <linearGradient id="paint92_linear" x1="76.8327" y1="37.1897" x2="94.3005" y2="45.9236" gradientUnits="userSpaceOnUse">
              <stop stop-color="#380762"/>
              <stop offset="1" stop-color="#4D0F7D"/>
            </linearGradient>
            <linearGradient id="paint93_linear" x1="63.186" y1="64.4832" x2="80.6538" y2="73.217" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3E0A6A"/>
              <stop offset="1" stop-color="#430873"/>
            </linearGradient>
            <linearGradient id="paint94_linear" x1="67.28" y1="60.3891" x2="76.0139" y2="77.8569" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4A097D"/>
              <stop offset="1" stop-color="#33025D"/>
            </linearGradient>
            <linearGradient id="paint95_linear" x1="61.8214" y1="74.0358" x2="70.5553" y2="91.5036" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3B0B60"/>
              <stop offset="1" stop-color="#280345"/>
            </linearGradient>
            <linearGradient id="paint96_linear" x1="76.8327" y1="59.0245" x2="94.3005" y2="67.7584" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1E0236"/>
              <stop offset="1" stop-color="#2F0255"/>
            </linearGradient>
            <linearGradient id="paint97_linear" x1="63.186" y1="86.3179" x2="80.6538" y2="95.0518" gradientUnits="userSpaceOnUse">
              <stop stop-color="#330756"/>
              <stop offset="1" stop-color="#27053E"/>
            </linearGradient>
            <linearGradient id="paint98_linear" x1="67.28" y1="82.2239" x2="76.0139" y2="99.6917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#390C5C"/>
              <stop offset="1" stop-color="#230639"/>
            </linearGradient>
            <linearGradient id="paint99_linear" x1="61.8214" y1="95.8706" x2="70.5553" y2="113.338" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1F0833"/>
              <stop offset="1" stop-color="#1D062F"/>
            </linearGradient>
            <linearGradient id="paint100_linear" x1="76.8327" y1="80.8592" x2="94.3005" y2="89.5931" gradientUnits="userSpaceOnUse">
              <stop stop-color="#180728"/>
              <stop offset="1" stop-color="#1C062F"/>
            </linearGradient>
            <linearGradient id="paint101_linear" x1="63.186" y1="108.153" x2="80.6538" y2="116.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0D0217"/>
              <stop offset="1" stop-color="#160523"/>
            </linearGradient>
            <linearGradient id="paint102_linear" x1="67.28" y1="104.059" x2="76.0139" y2="121.526" gradientUnits="userSpaceOnUse">
              <stop stop-color="#160427"/>
              <stop offset="1" stop-color="#10031B"/>
            </linearGradient>
            <linearGradient id="paint103_linear" x1="61.8214" y1="117.705" x2="70.5553" y2="135.173" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0D0415"/>
              <stop offset="1" stop-color="#0E0414"/>
            </linearGradient>
            <linearGradient id="paint104_linear" x1="76.8327" y1="102.694" x2="94.3005" y2="111.428" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0A0211"/>
              <stop offset="1" stop-color="#10041B"/>
            </linearGradient>
            <linearGradient id="paint105_linear" x1="63.186" y1="129.987" x2="80.6538" y2="138.721" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0A020F"/>
              <stop offset="1" stop-color="#040006"/>
            </linearGradient>
            <linearGradient id="paint106_linear" x1="67.28" y1="125.893" x2="76.0139" y2="143.361" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0A0311"/>
              <stop offset="1" stop-color="#06010A"/>
            </linearGradient>
            <linearGradient id="paint107_linear" x1="76.8327" y1="124.529" x2="94.3005" y2="133.263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#020004"/>
              <stop offset="1" stop-color="#050008"/>
            </linearGradient>
            <linearGradient id="paint108_linear" x1="85.0207" y1="-1.02104" x2="102.489" y2="7.71285" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5E149E"/>
              <stop offset="1" stop-color="#5F1A9A"/>
            </linearGradient>
            <linearGradient id="paint109_linear" x1="89.1147" y1="-5.11505" x2="97.8486" y2="12.3527" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4C028C"/>
              <stop offset="1" stop-color="#4F0F86"/>
            </linearGradient>
            <linearGradient id="paint110_linear" x1="83.6561" y1="8.53166" x2="92.39" y2="25.9994" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4D058C"/>
              <stop offset="1" stop-color="#4E127E"/>
            </linearGradient>
            <linearGradient id="paint111_linear" x1="98.6674" y1="-6.47972" x2="116.135" y2="2.25417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#40056F"/>
              <stop offset="1" stop-color="#4E1083"/>
            </linearGradient>
            <linearGradient id="paint112_linear" x1="83.6561" y1="30.3664" x2="92.39" y2="47.8342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4B1178"/>
              <stop offset="1" stop-color="#3A0664"/>
            </linearGradient>
            <linearGradient id="paint113_linear" x1="85.0207" y1="20.8137" x2="102.489" y2="29.5476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#520F85"/>
              <stop offset="1" stop-color="#4B0485"/>
            </linearGradient>
            <linearGradient id="paint114_linear" x1="89.1147" y1="16.7197" x2="97.8486" y2="34.1875" gradientUnits="userSpaceOnUse">
              <stop stop-color="#500C89"/>
              <stop offset="1" stop-color="#470D72"/>
            </linearGradient>
            <linearGradient id="paint115_linear" x1="98.6674" y1="15.355" x2="116.135" y2="24.0889" gradientUnits="userSpaceOnUse">
              <stop stop-color="#350953"/>
              <stop offset="1" stop-color="#400B67"/>
            </linearGradient>
            <linearGradient id="paint116_linear" x1="85.0207" y1="42.6484" x2="102.489" y2="51.3823" gradientUnits="userSpaceOnUse">
              <stop stop-color="#511C78"/>
              <stop offset="1" stop-color="#390E5B"/>
            </linearGradient>
            <linearGradient id="paint117_linear" x1="89.1147" y1="38.5544" x2="97.8486" y2="56.0222" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4B1572"/>
              <stop offset="1" stop-color="#360A55"/>
            </linearGradient>
            <linearGradient id="paint118_linear" x1="83.6561" y1="52.2011" x2="92.39" y2="69.6689" gradientUnits="userSpaceOnUse">
              <stop stop-color="#28034D"/>
              <stop offset="1" stop-color="#2C0B45"/>
            </linearGradient>
            <linearGradient id="paint119_linear" x1="98.6674" y1="37.1897" x2="116.135" y2="45.9236" gradientUnits="userSpaceOnUse">
              <stop stop-color="#28083D"/>
              <stop offset="1" stop-color="#30074E"/>
            </linearGradient>
            <linearGradient id="paint120_linear" x1="85.0207" y1="64.4832" x2="102.489" y2="73.217" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1A0033"/>
              <stop offset="1" stop-color="#260146"/>
            </linearGradient>
            <linearGradient id="paint121_linear" x1="89.1147" y1="60.3891" x2="97.8486" y2="77.8569" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2A064B"/>
              <stop offset="1" stop-color="#250839"/>
            </linearGradient>
            <linearGradient id="paint122_linear" x1="83.6561" y1="74.0358" x2="92.39" y2="91.5036" gradientUnits="userSpaceOnUse">
              <stop stop-color="#130125"/>
              <stop offset="1" stop-color="#190129"/>
            </linearGradient>
            <linearGradient id="paint123_linear" x1="98.6674" y1="59.0245" x2="116.135" y2="67.7584" gradientUnits="userSpaceOnUse">
              <stop stop-color="#150123"/>
              <stop offset="1" stop-color="#210632"/>
            </linearGradient>
            <linearGradient id="paint124_linear" x1="85.0207" y1="86.3179" x2="102.489" y2="95.0518" gradientUnits="userSpaceOnUse">
              <stop stop-color="#090016"/>
              <stop offset="1" stop-color="#0C0116"/>
            </linearGradient>
            <linearGradient id="paint125_linear" x1="89.1147" y1="82.2239" x2="97.8486" y2="99.6917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0C001C"/>
              <stop offset="1" stop-color="#0C0018"/>
            </linearGradient>
            <linearGradient id="paint126_linear" x1="83.6561" y1="95.8706" x2="92.39" y2="113.338" gradientUnits="userSpaceOnUse">
              <stop stop-color="#10021D"/>
              <stop offset="1" stop-color="#0B0016"/>
            </linearGradient>
            <linearGradient id="paint127_linear" x1="98.6674" y1="80.8592" x2="116.135" y2="89.5931" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0C0016"/>
              <stop offset="1" stop-color="#0D0018"/>
            </linearGradient>
            <linearGradient id="paint128_linear" x1="85.0207" y1="108.153" x2="102.489" y2="116.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0A020F"/>
              <stop offset="1" stop-color="#0C0215"/>
            </linearGradient>
            <linearGradient id="paint129_linear" x1="89.1147" y1="104.059" x2="97.8486" y2="121.526" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0E0117"/>
              <stop offset="1" stop-color="#090010"/>
            </linearGradient>
            <linearGradient id="paint130_linear" x1="83.6561" y1="117.705" x2="92.39" y2="135.173" gradientUnits="userSpaceOnUse">
              <stop stop-color="#070109"/>
              <stop offset="1" stop-color="#050009"/>
            </linearGradient>
            <linearGradient id="paint131_linear" x1="98.6674" y1="102.694" x2="116.135" y2="111.428" gradientUnits="userSpaceOnUse">
              <stop stop-color="#050107"/>
              <stop offset="1" stop-color="#08000D"/>
            </linearGradient>
            <linearGradient id="paint132_linear" x1="85.0207" y1="129.987" x2="102.489" y2="138.721" gradientUnits="userSpaceOnUse">
              <stop stop-color="#050108"/>
              <stop offset="1" stop-color="#020004"/>
            </linearGradient>
            <linearGradient id="paint133_linear" x1="89.1147" y1="125.893" x2="97.8486" y2="143.361" gradientUnits="userSpaceOnUse">
              <stop stop-color="#060109"/>
              <stop offset="1" stop-color="#030005"/>
            </linearGradient>
            <linearGradient id="paint134_linear" x1="98.6674" y1="124.529" x2="116.135" y2="133.263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#010001"/>
              <stop offset="1" stop-color="#030004"/>
            </linearGradient>
            <linearGradient id="paint135_linear" x1="106.855" y1="-1.02104" x2="124.323" y2="7.71285" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3F0770"/>
              <stop offset="1" stop-color="#39075E"/>
            </linearGradient>
            <linearGradient id="paint136_linear" x1="110.949" y1="-5.11505" x2="119.683" y2="12.3527" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3C0468"/>
              <stop offset="1" stop-color="#2F044B"/>
            </linearGradient>
            <linearGradient id="paint137_linear" x1="105.491" y1="8.53166" x2="114.225" y2="25.9994" gradientUnits="userSpaceOnUse">
              <stop stop-color="#340657"/>
              <stop offset="1" stop-color="#26033F"/>
            </linearGradient>
            <linearGradient id="paint138_linear" x1="120.502" y1="-6.47972" x2="137.97" y2="2.25417" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1D0333"/>
              <stop offset="1" stop-color="#2A0545"/>
            </linearGradient>
            <linearGradient id="paint139_linear" x1="105.491" y1="30.3664" x2="114.225" y2="47.8342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#260540"/>
              <stop offset="1" stop-color="#19022D"/>
            </linearGradient>
            <linearGradient id="paint140_linear" x1="106.855" y1="20.8137" x2="124.323" y2="29.5476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2C044B"/>
              <stop offset="1" stop-color="#2B044C"/>
            </linearGradient>
            <linearGradient id="paint141_linear" x1="110.949" y1="16.7197" x2="119.683" y2="34.1875" gradientUnits="userSpaceOnUse">
              <stop stop-color="#320454"/>
              <stop offset="1" stop-color="#1C0133"/>
            </linearGradient>
            <linearGradient id="paint142_linear" x1="120.502" y1="15.355" x2="137.97" y2="24.0889" gradientUnits="userSpaceOnUse">
              <stop stop-color="#140223"/>
              <stop offset="1" stop-color="#16012A"/>
            </linearGradient>
            <linearGradient id="paint143_linear" x1="106.855" y1="42.6484" x2="124.323" y2="51.3823" gradientUnits="userSpaceOnUse">
              <stop stop-color="#22013D"/>
              <stop offset="1" stop-color="#1B042D"/>
            </linearGradient>
            <linearGradient id="paint144_linear" x1="110.949" y1="38.5544" x2="119.683" y2="56.0222" gradientUnits="userSpaceOnUse">
              <stop stop-color="#21013B"/>
              <stop offset="1" stop-color="#140025"/>
            </linearGradient>
            <linearGradient id="paint145_linear" x1="105.491" y1="52.2011" x2="114.225" y2="69.6689" gradientUnits="userSpaceOnUse">
              <stop stop-color="#200B2C"/>
              <stop offset="1" stop-color="#150321"/>
            </linearGradient>
            <linearGradient id="paint146_linear" x1="120.502" y1="37.1897" x2="137.97" y2="45.9236" gradientUnits="userSpaceOnUse">
              <stop stop-color="#11011A"/>
              <stop offset="1" stop-color="#130121"/>
            </linearGradient>
            <linearGradient id="paint147_linear" x1="106.855" y1="64.4832" x2="124.323" y2="73.217" gradientUnits="userSpaceOnUse">
              <stop stop-color="#130220"/>
              <stop offset="1" stop-color="#1B0927"/>
            </linearGradient>
            <linearGradient id="paint148_linear" x1="110.949" y1="60.3891" x2="119.683" y2="77.8569" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1D0929"/>
              <stop offset="1" stop-color="#13051B"/>
            </linearGradient>
            <linearGradient id="paint149_linear" x1="105.491" y1="74.0358" x2="114.225" y2="91.5036" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0D0019"/>
              <stop offset="1" stop-color="#0D0316"/>
            </linearGradient>
            <linearGradient id="paint150_linear" x1="120.502" y1="59.0245" x2="137.97" y2="67.7584" gradientUnits="userSpaceOnUse">
              <stop stop-color="#090111"/>
              <stop offset="1" stop-color="#100417"/>
            </linearGradient>
            <linearGradient id="paint151_linear" x1="106.855" y1="86.3179" x2="124.323" y2="95.0518" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0D0016"/>
              <stop offset="1" stop-color="#090010"/>
            </linearGradient>
            <linearGradient id="paint152_linear" x1="110.949" y1="82.2239" x2="119.683" y2="99.6917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0C0116"/>
              <stop offset="1" stop-color="#08010F"/>
            </linearGradient>
            <linearGradient id="paint153_linear" x1="105.491" y1="95.8706" x2="114.225" y2="113.338" gradientUnits="userSpaceOnUse">
              <stop stop-color="#08010D"/>
              <stop offset="1" stop-color="#040108"/>
            </linearGradient>
            <linearGradient id="paint154_linear" x1="120.502" y1="80.8592" x2="137.97" y2="89.5931" gradientUnits="userSpaceOnUse">
              <stop stop-color="#040007"/>
              <stop offset="1" stop-color="#06000B"/>
            </linearGradient>
            <linearGradient id="paint155_linear" x1="106.855" y1="108.153" x2="124.323" y2="116.886" gradientUnits="userSpaceOnUse">
              <stop stop-color="#040005"/>
              <stop offset="1" stop-color="#050009"/>
            </linearGradient>
            <linearGradient id="paint156_linear" x1="110.949" y1="104.059" x2="119.683" y2="121.526" gradientUnits="userSpaceOnUse">
              <stop stop-color="#07000C"/>
              <stop offset="1" stop-color="#030005"/>
            </linearGradient>
            <linearGradient id="paint157_linear" x1="105.491" y1="117.705" x2="114.225" y2="135.173" gradientUnits="userSpaceOnUse">
              <stop stop-color="#030004"/>
              <stop offset="1" stop-color="#020003"/>
            </linearGradient>
            <linearGradient id="paint158_linear" x1="120.502" y1="102.694" x2="137.97" y2="111.428" gradientUnits="userSpaceOnUse">
              <stop stop-color="#010002"/>
              <stop offset="1" stop-color="#020004"/>
            </linearGradient>
            <linearGradient id="paint159_linear" x1="106.855" y1="129.987" x2="124.323" y2="138.721" gradientUnits="userSpaceOnUse">
              <stop stop-color="#030003"/>
              <stop offset="1" stop-color="#010001"/>
            </linearGradient>
            <linearGradient id="paint160_linear" x1="110.949" y1="125.893" x2="119.683" y2="143.361" gradientUnits="userSpaceOnUse">
              <stop stop-color="#030003"/>
              <stop offset="1" stop-color="#010001"/>
            </linearGradient>
            <linearGradient id="paint161_linear" x1="120.502" y1="124.529" x2="137.97" y2="133.263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#010001"/>
              <stop offset="1" stop-color="#010001"/>
            </linearGradient>
            <linearGradient id="paint162_linear" x1="54.5897" y1="76.5407" x2="71.0952" y2="93.0462" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4F5A98"/>
              <stop offset="1" stop-color="#253CB1"/>
            </linearGradient>
            <linearGradient id="paint163_linear" x1="76.616" y1="53.594" x2="43.6625" y2="86.5475" gradientUnits="userSpaceOnUse">
              <stop stop-color="#69D2FF"/>
              <stop offset="1" stop-color="#8251EB" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint164_linear" x1="80.815" y1="38.1237" x2="53.21" y2="65.7287" gradientUnits="userSpaceOnUse">
              <stop stop-color="#8769FF"/>
              <stop offset="1" stop-color="#6F55B8" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint165_linear" x1="67.3859" y1="50.2009" x2="67.3859" y2="87.4677" gradientUnits="userSpaceOnUse">
              <stop stop-color="#70ED5C"/>
              <stop offset="1" stop-color="#253CB1"/>
            </linearGradient>
            <clipPath id="clip0">
              <rect width="128" height="128" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </router-link>
      <nav v-if="!mobileMode">
        <router-link
          v-for="nav in routes"
          :key="nav.id"
          :to="nav.route"
          class="font-18"
          :class="$store.state.activeMenu == nav.id ? 'active' : ''"
          @click.native="closeBurger(),activeLinkFunc(nav.id)"
        >
          {{nav.title}}
        </router-link>
      </nav>
      <div class="header__download-container">
        <div class="ttl">Download</div>
        <div class="buttons">
          <a href="#">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3333 31.9999C18.4437 31.9999 19.4121 31.0669 19.4121 29.997V25.3191H20.8001C21.633 25.3191 22.1881 24.784 22.1881 23.9817V10.6211H5.54529V23.9818C5.54529 24.7843 6.10049 25.3192 6.93328 25.3192H8.32139V29.9971C8.32139 31.067 9.2895 32.0001 10.4001 32.0001C11.5104 32.0001 12.4786 31.067 12.4786 29.9971V25.3192H15.2547V29.9971C15.2546 31.0669 16.2229 31.9999 17.3333 31.9999Z" fill="white"/>
              <path d="M25.6549 23.9818C26.7653 23.9818 27.7334 23.0489 27.7334 21.9788V12.6232C27.7334 11.5589 26.7653 10.6211 25.6549 10.6211C24.5444 10.6211 23.5762 11.5589 23.5762 12.6232V21.9788C23.5762 23.0488 24.5443 23.9818 25.6549 23.9818Z" fill="white"/>
              <path d="M2.0785 23.9818C3.18901 23.9818 4.15723 23.0489 4.15723 21.9788V12.6232C4.15723 11.5589 3.18912 10.6211 2.0785 10.6211C0.968107 10.6211 0 11.5589 0 12.6232V21.9788C0 23.0488 0.968107 23.9818 2.0785 23.9818Z" fill="white"/>
              <path d="M20.5224 0.201815C20.2449 -0.0672718 19.8317 -0.0672718 19.5542 0.201815L17.6926 1.98964L17.6067 2.07229C16.5029 1.53967 15.2653 1.27368 13.887 1.27112C13.8802 1.27112 13.8736 1.2709 13.8668 1.2709H13.8666C13.8596 1.2709 13.8532 1.27112 13.8462 1.27112C12.4681 1.27368 11.2305 1.53967 10.1267 2.07229L10.0406 1.98964L8.1791 0.201815C7.90139 -0.0672718 7.48848 -0.0672718 7.21099 0.201815C6.93328 0.469407 6.93328 0.866524 7.21099 1.1339L9.01179 2.86941C8.43155 3.24271 7.90538 3.69952 7.44781 4.222C6.35238 5.47314 5.65367 7.10144 5.55759 8.86567C5.5567 8.88404 5.55482 8.90219 5.55393 8.92056C5.54806 9.04068 5.54529 9.16145 5.54529 9.28265H22.1881C22.1881 9.16145 22.1851 9.04068 22.1794 8.92056C22.1785 8.90219 22.1766 8.88404 22.1755 8.86567C22.0797 7.10144 21.3807 5.47304 20.2853 4.2221C19.828 3.69963 19.3016 3.24282 18.7213 2.86951L20.5224 1.13401C20.8001 0.866524 20.8001 0.469407 20.5224 0.201815ZM10.3975 6.94746C9.8232 6.94746 9.35765 6.49888 9.35765 5.94554C9.35765 5.39221 9.8232 4.94362 10.3975 4.94362C10.9717 4.94362 11.4373 5.39221 11.4373 5.94554C11.4373 6.49888 10.9717 6.94746 10.3975 6.94746ZM17.3359 6.94746C16.7616 6.94746 16.2961 6.49888 16.2961 5.94554C16.2961 5.39221 16.7616 4.94362 17.3359 4.94362C17.9101 4.94362 18.3757 5.39221 18.3757 5.94554C18.3757 6.49888 17.9101 6.94746 17.3359 6.94746Z" fill="white"/>
            </svg>
          </a>
          <a href="#">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8411 32C7.00246 31.9726 3 22.2506 3 17.2994C3 9.21163 9.16415 7.441 11.5398 7.441C12.6104 7.441 13.7535 7.85481 14.7618 8.221C15.4669 8.47644 16.1961 8.74013 16.6017 8.74013C16.8445 8.74013 17.4165 8.51581 17.9216 8.319C18.9987 7.89694 20.3391 7.37238 21.8999 7.37238C21.9027 7.37238 21.9064 7.37238 21.9091 7.37238C23.0746 7.37238 26.6083 7.62413 28.7328 10.7644L29.2304 11.5004L28.5142 12.0324C27.4911 12.7923 25.6242 14.1784 25.6242 16.9241C25.6242 20.176 27.7385 21.4266 28.7542 22.0281C29.2026 22.2936 29.6667 22.5674 29.6667 23.1661C29.6667 23.5571 26.4967 31.9515 21.8933 31.9515C20.7669 31.9515 19.9707 31.6183 19.2684 31.3244C18.5578 31.0268 17.9448 30.7705 16.9318 30.7705C16.4184 30.7705 15.7691 31.0094 15.0817 31.2631C14.1424 31.6081 13.0792 32 11.8728 32H11.8411Z" fill="white"/>
              <path d="M22.3876 0C22.5075 4.25475 19.416 7.2065 16.3282 7.02137C15.8194 3.62594 19.4157 0 22.3876 0Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      mobileMode: null,
      activeBurger: false,
      firstAnimation: false,
      routes: [
        {
          id: 1,
          title: 'Explore',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#explore'
          }
        },
        {
          id: 2,
          title: 'Community',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#community'
          }
        },
        {
          id: 3,
          title: 'faq',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#faq'
          }
        }
      ]
    }
  },
  methods: {
    mobileModeFunc () {
      if (window.innerWidth >= 768) {
        this.mobileMode = false
      } else {
        this.mobileMode = true
      }
    },
    myEventHandler (e) {
      this.mobileModeFunc()
    },
    openBurger () {
      this.activeBurger = true
    },
    closeBurger () {
      this.activeBurger = false
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
      console.log(id)
    }
  },
  mounted () {
    this.mobileModeFunc()
    setTimeout(() => {
      this.firstAnimation = true
      this.$store.commit('setMenuStatus', null)
    }, 700)
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }
}
</script>
<style scoped>
  .logo{
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .logo{
    transform: translateY(0px);
    opacity: 1;
  }
  .header__download-container .buttons a:hover path{
    fill: #3BD065;
  }
  .header__download-container .buttons a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .header__download-container .buttons{
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .header__download-container .ttl{
    color: rgba(255,255,255,.6);
    font-size: 16px;
    margin-bottom: 25px;
  }
  .header__download-container{
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .header__download-container{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  header{
    position: fixed;
    width: 210px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: #00050F;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-right: 1px solid rgba(255,255,255,.05);
    border-bottom: 1px solid rgba(255,255,255,.05);
  }
  nav{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead nav{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .1s;
  }
  nav a{
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 10px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  nav a:hover{
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    color: transparent;
  }
  nav a.active,nav a:hover{
    color: #3BD065;
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
