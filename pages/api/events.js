import axios from "axios";

const handler = async (req, res) => {

    const {query} = req.query;

    if (!query) {
        return res.status(400).json({error: 'Query parameter is required'});
    }

    try {
        const response = await axios.get('https://serpapi.com/search', {
            params: {
                engine: 'google_events',
                q: query,
                api_key: process.env.SERP_API_KEY
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export default handler;