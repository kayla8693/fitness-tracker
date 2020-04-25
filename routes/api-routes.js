const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    })

    app.post("/api/workouts", (req, res) => {
        console.log("This is the req!!!" + req.body);

        db.Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        var id = req.params.id;
        db.Workout.findByIdAndUpdate(
            id,
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then(dbWorkout => {
                console.log(dbWorkout);
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
};
