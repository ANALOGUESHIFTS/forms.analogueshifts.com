"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/application/file-input";
import { DialogClose } from "@/components/ui/dialog";

interface AddQuestionFormProps {
  questionNumber: string;
  submitQuestion: (data: any) => void;
}
type UpdateOption = (index: number, event: any) => void;
type DeleteOption = (index: number) => void;

const AddQuestionForm: React.FC<AddQuestionFormProps> = ({
  questionNumber,
  submitQuestion,
}) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [type, setType] = useState("short_text");
  const [options, setOptions]: any = useState([{ value: "Option 1" }]);
  const [isRequired, setIsRequired] = useState(false);

  // Update the value of an option
  const updateOption: UpdateOption = (index, event) => {
    const newItems: any = [...options];
    newItems[index].value = event.target.value;
    setOptions(newItems);
  };

  // Remove an option from the list
  const deleteOption: DeleteOption = (index) => {
    const newItems: any = [...options];
    newItems.splice(index, 1);
    setOptions(newItems);
  };

  // Add an option
  const addOption = () => {
    setOptions((previous: any) => [
      ...previous,
      { value: `Option ${previous.length + 1}` },
    ]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    submitQuestion({
      number: questionNumber,
      question: question,
      answer: answer,
      type: type,
      options: options,
      required: isRequired,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-wrap gap-x-5 gap-y-5  h-max px-2 py-5 rounded-3xl"
    >
      <div className="w-full md:w-[calc(65%-10px)] flex flex-col gap-3">
        <p className="text-sm font-normal text-primary-boulder400">QUESTION</p>
        <input
          required
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g “What is your role?”"
          className="max-w-full w-full h-14 rounded-2xl  px-5 border border-primary-boulder200 text-[13px] font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-1 outline-background-lightYellow"
        />
      </div>
      <div className="w-full md:w-[calc(35%-10px)] flex flex-col gap-3">
        <p className="text-sm font-normal text-primary-boulder400">TYPE</p>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="max-w-full w-full h-14 rounded-2xl  px-5 border border-primary-boulder200 text-[13px] font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-none"
        >
          {["short_text", "long_text", "radio", "checkbox", "file"].map(
            (option) => {
              return (
                <option value={option} key={option}>
                  {option}
                </option>
              );
            }
          )}
        </select>
      </div>

      {(type === "short_text" || type === "long_text") && (
        <div className="w-full flex flex-col gap-3">
          <p className="text-sm font-normal text-primary-boulder400">ANSWER</p>

          {type === "long_text" ? (
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="e.g “Frontend Development”"
              className="max-w-full w-full h-24 pt-3 rounded-2xl px-5 border border-primary-boulder200 text-[13px] font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-1 outline-background-lightYellow"
            ></textarea>
          ) : (
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="e.g “Frontend Development”"
              className="max-w-full w-full h-14 rounded-2xl  px-5 border border-primary-boulder200 text-[13px] font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-1 outline-background-lightYellow"
            />
          )}
        </div>
      )}
      {type === "file" && (
        <div className="w-full flex flex-col gap-3 -z-10">
          <FileInput />
        </div>
      )}
      {(type === "radio" || type === "checkbox") && (
        <div className="w-full flex flex-col gap-3">
          <p className="text-sm font-normal text-primary-boulder400 mb-1">
            OPTIONS
          </p>
          <AnimatePresence mode={"sync"}>
            {options.map((item: any, index: number) => {
              return (
                <motion.div
                  layout
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring" }}
                  key={index}
                  className="w-full flex justify-between items-center"
                >
                  <div className="w-11/12 flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 border border-primary-boulder200 ${
                        type === "radio" ? "rounded-full" : "rounded"
                      }`}
                    ></div>
                    <input
                      onChange={(e) => updateOption(index, e)}
                      value={item.value}
                      className="w-[calc(100%-26px)] border-b focus:border-tremor-brand-boulder300/80 border-primary-boulder200/50 text-[13px] pb-1 px-1 font-light placeholder:text-primary-boulder300 text-primary-boulder950 outline-none"
                    />
                  </div>
                  <button
                    onClick={() => deleteOption(index)}
                    type="button"
                    className="text-base hover:text-primary-boulder950 font-normal text-primary-boulder400"
                  >
                    <i className="fas fa-xmark"></i>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <button
            onClick={addOption}
            type="button"
            className="text-sm font-normal hover:text-primary-boulder950 text-primary-boulder400 mr-auto"
          >
            Add {options.length > 0 ? "another" : "option"}
          </button>
        </div>
      )}
      <div className="w-full flex items-center gap-4">
        <p className="text-sm font-normal text-primary-boulder400">REQUIRED</p>

        <Switch
          checked={isRequired}
          onCheckedChange={(checked) => setIsRequired(checked)}
        />
      </div>
      <div className="w-full mt-5 flex justify-end">
        <DialogClose
          className={`${
            question.trim().length < 1
              ? "-z-10 opacity-50"
              : "z-auto opacity-100"
          } duration-300`}
        >
          <Button
            type="submit"
            className="bg-background-lightYellow hover:bg-background-lightYellow/80"
          >
            Add Question
          </Button>
        </DialogClose>
      </div>
    </form>
  );
};

export default AddQuestionForm;