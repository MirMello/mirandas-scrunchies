const data = {
    collections : require('../../data/Collection.json'),
    setCollections: function (data) { this.collections = data }
}

const getAllCollections = (req, res) => {
    res.json(data.collections);
}

const createNewCollection = (req, res) => {
    const newCollection = {
        id: data.collections?.length ? data.collections[data.collections.length - 1].collection_id + 1 : 1,
        title: req.body.title
    }
    if (!newCollection.title) {
        return res.status(400).json({ 'message': 'A collection title is requried.' });
    }

    data.setCollections([...data.collections]);
    res.status(201).json(data.collections);
}

const updateCollection = (req, res) => {
    const collection = data.collections.find(col => col.collection_id === parseInt(req.body.id));
    if (!collection) {
        return res.status(400).json({ "message": `Collection ID ${req.body.id} not found` });
    }
    if (req.body.id) collection.id = req.body.id;
    if (req.body.title) collection.title = req.body.title;
    const filteredArray = data.collections.filter(col => col.collection_id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, collection];
    data.setCollections(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.collections);
}


const deleteCollection = (req, res) => {
    const collection = data.collections.find(col => col.id === parseInt(req.body.id));
    if (!collection) {
        return res.status(400).json({ "message": `Collection ID ${req.body.id} not found` });
    }
    const filteredArray = data.collections.filter(col => col.id !== parseInt(req.body.id));
    data.setCollections([...filteredArray]);
    res.json(data.collections);
}

const getCollection = (req, res) => {
    const collection = data.collections.find(col => col.id === parseInt(req.params.id));
    if (!collection) {
        return res.status(400).json({ "message": `Collection ID ${req.params.id} not found` });
    }
    res.json(collection);
}

module.exports = {
    getAllCollections,
    createNewCollection,
    updateCollection,
    deleteCollection,
    getCollection
}