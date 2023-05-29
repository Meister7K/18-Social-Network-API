const {User,Thought,Reaction} = require('../models');
const{Types} = require('mongoose');
const {ObjectId} = require('mongoose').Types;

const thoughtController = {


    // ! CRUD
    async getThoughts(req,res){
        try{
            const thoughtsData = await Thought.find({});

            res.json(thoughtsData);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getThought(req,res){
        try{
            const thoughtData = await Thought.findOne({_id:req.params.thoughtId});

            if(!thoughtData) return res.status(404).json({message: 'Not a thought in this head'});

            res.json(thoughtData);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async addThought(req,res){
        try{
            const newThought = await Thought.create(req.body);

            res.json(newThought);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteThought(req,res){
        try{
            const deleteThoughtData = await Thought.findByIdAndDelete({_id:req.params.thoughtId});

            if(!deleteThoughtData) return res.status(404).json({message: 'Not a thought in this head'});

            res.json({message: 'Bad thought removed'});//!

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateThought(req,res){
        try{
            const updateThoughtData = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {new:true});

            if(!updateThoughtData) return res.status(404).json({message: 'Not a thought in this head'});

            res.json(updateThoughtData);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getReactions(req,res){
        try{
            const reactionsData = await Reaction.find({});

            res.json(reactionsData);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async addReaction(req,res){
        try{
            const newReaction = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new: true}
            );
            
            if(!newReaction) return res.status(404).json({message: 'no thought found'});

            res.json(newReaction);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteReaction(req,res){
        try{
            const delReaction = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {runValidators: true, new: true}
            );
            
            if(!delReaction) return res.status(404).json({message: 'no thought found'});

            res.json({message: `Reaction removed`});

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },



}

module.exports = thoughtController;