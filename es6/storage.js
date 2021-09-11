const addToLcoalStorage =() => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const storageId =document.getElementById('storage-value');
    const storage =storageId.value;

    // 
if (id && storage){
    localStorage.setItem(id, storage);
}
    idInput.value = '';
    storageId.value ='';
}
localStorage.setItem('friends', JSON.stringify(['ajfh', 'ahf', 'alouiau'])) /// to added a object 

