exports.getAuthors = (req, res, next) => {
    res.status(200).json({
        authors: [{ name: "Binod Shrestha", dob: "1982, March, 04" }],
    });
};
