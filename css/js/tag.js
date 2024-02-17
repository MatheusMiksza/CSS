const colors = {
    p:'#388e3c',
    div:'#1565c0',
    span:'#e53935',
    section:'#f64809',
    ul:'#5e35b1',
    ol:'#d81b60',
    header:'#de1b60',
    nav:'#64dd17',
    main:'#00acc1',
    footer:'#304ffe',
    form:'#9f6481',
    body:'#25b6da',
    padrao:'#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao;
    }

}

document.querySelectorAll('.tag').forEach(tag =>{
    const tagName = tag.tagName.toLocaleLowerCase();

    tag.style.borderColor = colors.get(tagName);

    if(!tag.classList.contains('nolabel')){
        const label = document.createElement('label');
        label.style.background = colors.get(tagName);;
        label.innerHTML = tagName;
        tag.insertBefore(label,tag.childNodes[0]);
    }
})