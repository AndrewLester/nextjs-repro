export default (_, res) => {
    'Error'.error(); // This is an accident, what can you do
    res.status(200).json({ test: 'hi' });
};
