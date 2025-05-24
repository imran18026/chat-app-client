import mongoose, { model, Schema } from "mongoose";

const messageSchema = new Schema(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    readBy: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

if (mongoose.models && mongoose.models["Message"]) {
  mongoose.deleteModel("Message");
}

export const Message = model("Message", messageSchema);
