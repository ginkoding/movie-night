const APILink = 'https://imdb-api.com/en/API/Top250Movies/k_z2ljp223'

getData = () => {
fetch(APILink)
.then((res) => res.json())
.then((data) => {
    const rawData = data.items;
    console.log('data', rawData);
});
};

getData();