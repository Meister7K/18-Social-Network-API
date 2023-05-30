const {User} =require('../models');





const userController = {



    // ! CRUD
    async getUsers(req,res){
        try{
            usersData = await User.find({});

            res.json(usersData);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getUser(req,res){
        try{
            const userData = await User.findById(req.params.userId);

            if(!userData) return res.status(404).json({message:'User not found'});

            res.json(userData);//! look into adding #of friends

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async addUser(req,res){
        try{
            const newUser = await User.create(req.body);

            res.json(newUser);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //!
    async updateUser(req,res){
        try{
            const updateUserData = await User.findByIdAndUpdate(req.params.userId, req.body, {runValidators: true, new: true});

            

            if(!updateUserData) return res.status(404).json({message:'User not found'});

            res.json(updateUserData);

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteUser(req,res){
        try{
            const deleteUserData = await User.findOneAndDelete({_id: req.params.userId});

            if(!deleteUserData) return res.status(404).json({message:'User not found'});

            res.json({message:`User Terminated ${deleteUserData}`});

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async addFriend(req,res){
        try{
            const newFriend = await User.findOneAndUpdate(
                { _id: req.params.friendId},
                {$addToSet:{friends: req.body.friendId}},//!verify
                {/*runValidators: true,*/ new: true}
            );

            if(!newFriend) return res.status(404).json({message:'User not found'});

            res.json(newFriend);
        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async removeFriend(req,res){
        try{

            const notFriend = await User.findOneAndUpdate(
              {_id: req.params.userId},
              {$pull:{friends: req.params.friendId}},
              { new:true}  
            );

            if(!notFriend) return res.status(404).json({message:'User not found'});

            console.log(req.params.friendId);//!
            // const noFriend = !notFriend.friends.includes(res.params.friendId);

            // if(noFriend) 
            res.json({message: `Friendship terminated with ${notFriend}`})

        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },
};

module.exports = userController