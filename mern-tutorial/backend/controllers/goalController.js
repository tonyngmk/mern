const asyncHandler = require("express-async-handler");

//@desc    Get goals
//@route   GET /api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get 2023 goals"})
});

//@desc    Set goal
//@route   POST /api/goals
//@access  Private
const setGoal = asyncHandler(async (req, res) => {
    if (! req.body.text) {
        res.status(400)
        throw new Error("Please add a goal");
    };
    res.status(200).json({message: "Set 2023 goal"});
});

//@desc    Update goal
//@route   Put /api/goals/:id
//@access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update 2023 goal ${req.params.id}`});
});

//@desc    Delete goal
//@route   DELETE /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete 2023 goal ${req.params.id}`});
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};
