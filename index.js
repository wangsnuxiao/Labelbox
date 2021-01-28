function label(label){
    Labelbox.setLabelForAsset(label).then(() => {
        Labelbox.fetchNextAssetToLabel();
    });
}

Labelbox.currentAsset().subscribe((asset) => {
    if (asset){
        drawItem(asset.data);
    }
})
function drawItem(dataToLabel){
    const labelForm = `
    <img src="${dataToLabel}" style="width: 300px;"></img>
    <div style="display: flex;">
      <button onclick="label('Red_Apple')">Red Apple</button>
      <button onclick="label('Green_Apple')">Green Apple</button>
    </div>
  `;
    document.querySelector('#form').innerHTML = labelForm;
}