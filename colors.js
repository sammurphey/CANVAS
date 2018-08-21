var swatches = document.getElementsByClassName('swatch')

var colors = [  //row 1
              '#f4a7a6', '#f4baa4', '#f5cea1', '#f2e19f', '#f1f59c', 
              '#e1f49d', '#cff49d', '#bbf49d', '#a8f49e', '#a8f4b4', 
              '#a8f4cb', '#a8f4de', '#a8f4f1', '#a7e1f4', '#a6cdf8', 
              '#a7b9fa', '#a6a6fb', '#b9a6fb', '#cea6fa', '#e0a6f8', 
              '#f4a7f7', '#f4a7e3', '#f4a7d1', '#f4a7bb', '#e5e5e5', 
                //row 2
              '#f6817e', '#f6817e', '#f6bd76', '#f5da70', '#f3f769', 
              '#d7f76a', '#bdf76b', '#9ff66b', '#81f66c', '#81f692', 
              '#81f6b6', '#81f6d4', '#80f6f3', '#80d7f8', '#7ebbfc', 
              '#7e9cfd', '#7e7eff', '#9c7eff', '#ba7ffe', '#d77ffc', 
              '#f57ff9', '#f580dc', '#f580c0', '#f5809e', '#d6d6d6', 
                //row 3
              '#f95953', '#fa824e', '#f9ab45', '#f7d237', '#f4fa1c', 
              '#d0fa1f', '#acfa24', '#83fa26', '#5cfa27', '#5cf96d', 
              '#5bf9a1', '#5af9cb', '#59f9f4', '#57d0fb', '#57a9ff', 
              '#567eff', '#5455ff', '#7e55ff', '#a855ff', '#d056ff', 
              '#f956fd', '#f957d5', '#f958ae', '#f95981', '#bbbbbb', 
                //row 4
              '#fd3425', '#fd6519', '#fe9900', '#facb00', '#f7ff00', 
              '#c8ff00', '#9afe00', '#67fe00', '#39fe00', '#39fd3f', 
              '#38fd8a', '#36fdc1', '#35fdf7', '#30c9ff', '#2c97ff', 
              '#2b61ff', '#292aff', '#602aff', '#962bff', '#c82cff', 
              '#fc2eff', '#fd31cd', '#fd329c', '#fd3363', '#a2a2a2',
                //row 5
              '#fe1500', '#fe4400', '#ff8000', '#febe00', '#ffff00', 
              '#beff00', '#81fe00', '#48fe00', '#22fe00', '#21fe00', 
              '#1ffe6a', '#1bfeb7', '#13fdff', '#00bcff', '#007dff', 
              '#003cff', '#0000ff', '#3c00ff', '#7c00ff', '#bb04ff', 
              '#fd06ff', '#fe06c4', '#fe1081', '#fe143d', '#828282', 
                //row 6
              '#dd1200', '#dd3e00', '#de7400', '#daa800', '#d7df00', 
              '#a4df00', '#75de00', '#42de00', '#1dde00', '#1dde00', 
              '#1bde62', '#18de9d', '#13ded5', '#00a6de', '#0071e6', 
              '#0037e7', '#0000e8', '#3800e8', '#7000e8', '#a604e3', 
              '#dd05de', '#dd05a9', '#dd0e75', '#dd1139', '#6d6d6d', 
                //row 7
              '#b11100', '#b23500', '#b26000', '#b08700', '#adb300', 
              '#85b200', '#60b200', '#38b200', '#19b200', '#19b200', 
              '#17b252', '#15b280', '#11b2ac', '#0486b3', '#005db9', 
              '#0030ba', '#0000ba', '#3000ba', '#5d00ba', '#8604b7', 
              '#b104b3', '#b10989', '#b10e61', '#b11131', '#585858', 
                //row 8
              '#881200', '#882d00', '#884c00', '#866900', '#848800', 
              '#688800', '#4d8800', '#2f8800', '#168800', '#168805', 
              '#158843', '#138864', '#128783', '#0d6888', '#074b8d', 
              '#042a8e', '#00008e', '#2a008e', '#4a068e', '#68088c', 
              '#870c89', '#870e6b', '#87104d', '#88112b', '#434343', 
                //row 9
              '#60130d', '#602607', '#603a00', '#5f4d00', '#5e6100', 
              '#4c6100', '#3b6100', '#266100', '#156100', '#156117', 
              '#156135', '#13614a', '#12605e', '#104c61', '#103964', 
              '#0f2464', '#0e0e65', '#240e65', '#390f65', '#4c0f62', 
              '#601061', '#60114e', '#60123b', '#601325', '#303030', 
                //row 10
              '#3c1210', '#3c1c0e', '#3c270a', '#3b3200', '#3b3d00', 
              '#313d00', '#283d00', '#1d3d00', '#123d00', '#123d16', 
              '#123c25', '#123c2f', '#123c3b', '#11313d', '#11273e', 
              '#101b3f', '#10103f', '#1b103f', '#27103f', '#31113e', 
              '#3c113d', '#3c1132', '#3c1128', '#3c121c', '#202020', 
                //row 11
              '#2d100f', '#2d180f', '#2d1f0d', '#2c260b', '#2c2d06', 
              '#252d06', '#202d08', '#182d08', '#112d08', '#112d14', 
              '#112d1e', '#112d25', '#102d2c', '#10262d', '#101f2f', 
              '#10172f', '#10102f', '#17102f', '#1f102f', '#26102e', 
              '#2d102e', '#2d1027', '#2d1020', '#2d1018', '#1a1a1a'
              ];
    
for (var i=0, n=colors.length;i<n;i++) {
    var swatch = document.createElement('div');
    swatch.className = 'palette_item';
    swatch.style.background = colors[i];
    document.getElementById('palette').appendChild(swatch);
    document.getElementById('selected_color').addEventListener('click', openPalette);
    swatch.addEventListener('click', setColor);
}

function setColor(e) {
    context.fillStyle = e.target.style.background;
    context.strokeStyle = e.target.style.background;
    document.getElementById('selected_color').style.background = e.target.style.background;
}

function openPalette() {
    //open palette
    document.getElementById('palette').className += ' open';
    document.getElementById('click_off').className += ' open';
    document.getElementById('click_off').addEventListener('click', killElement);
    document.getElementById('palette').addEventListener('click', killElement);
    
}

function killElement(k) {
    document.getElementById('click_off').className = 'click_off';
    document.getElementById('palette').className = 'palette';
}