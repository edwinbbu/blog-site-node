var mongoose = require('mongoose');
var BlogSchema = mongoose.Schema({
    title: { 
        type: String, 
        required:true 
    },
    content: { 
        type: String,
        required:true
    },
    creator: {
        type:String,
        default: "Anonymous"
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    img: {
		name:{
            type: String
        },
        path:{
            type: String
        }
	},
});

var Blog = module.exports = mongoose.model('Blog', BlogSchema);

//module.exports = Blog;