import mongoose from 'mongoose';
const { Schema } = mongoose;

const HospitalSchema = Schema({
	name: String,
	address: String,
	city: String,
	description: String,
	tags: [String],
	comments: [{ content: String }],
});

const Hospital = mongoose.model('Hospital', HospitalSchema);
export default Hospital;
