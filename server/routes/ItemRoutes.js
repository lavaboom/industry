const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const itemFile = './data/items.json'

/* -----------------------------------------------------------------------------
Helper functions
----------------------------------------------------------------------------- */

// read single json data file
const readItem = async () => {
    const itemData = await fs.promises.readFile(itemFile, 'utf8');
    return JSON.parse(itemData);
}

// write to json data file
const writeItem = async (items) => {
    const itemData = JSON.stringify(items);
    await fs.promises.writeFile(itemFile, itemData);
}

// [optional] validate input received from frontend - IMPLEMENT IF NECESSARY
const validateItem = (item) => {
    return {
        isValid: true,
        missingFields: []
    };
}
/* -----------------------------------------------------------------------------
API routes
----------------------------------------------------------------------------- */

// GET all items
router.get('/', async (req,res) => {
    console.log('List of all items requested')
    const items = await readItem();
    res.status(200).json(items);
})

// GET a single item
router.get('/:id', async (req,res) => {
    console.log(`Requesting item ${req.params.id}`)
    const items = await readItem();
    const requestedItem = items.find((data)=> {
        return data.id === req.params.id
    })
    res.status(200).send(
        {
            id: requestedItem.id,
            content: requestedItem.content
        }
    )
})

// PUT single item
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const newItem = req.body;

    // get items
    const items = await readItem();
    
    // check to see if id exists
    const found = items.some(item => item.id === id);
    // return early res 404
    if (!found) return res.status(404).json({error: 'no item found'});
    
    // check req.body for validation
    const validity = validateItem(newItem);

    if (!validity.isValid) {
        const missingFieldsStr = validity.missingFields.join(', ');
        return res.status(400).json(
            {error: `You are missing the following fields: ${missingFieldsStr}`});
    }

    // filter out items
    const newItems = items.filter(item => item.id !== id);

    // add edited item
    newItems.push(newItem);

    // write item
    await writeItem(newItems);
    res.json(newItem);
})

// DELETE single item
router.delete('/:id', async (req,res) => {
    const items = await readItem();
    const requestedItem = items.find((data) => {
        return data.id === req.params.id
    })
    console.log(`Deleting item ${requestedItem.name}`)
    const newItemsList = items.filter(item => {
        return item.id !== requestedItem.id
    })
    fs.writeFileSync('./data/items.json', 
        JSON.stringify(newItemsList))
    res.status(200).json(newItemsList)
})


// POST new item
router.post('/', async (req,res) => {
    const itemBody = req.body
    const items = await readItem();

    const newItem = {
        id: uuidv4(),
        content: 'placeholder'
    }

    const validity = validateItem(newItem);

    if (!validity.isValid) {
        const missingFieldsStr = validity.missingFields.join(', ');
        return res.status(400).json(
            {error: `You are missing the following fields: ${missingFieldsStr}`});
    }

    items.push(newItem);
    await writeItem(items);
    res.status(201).json(newItem);
})

module.exports = router
