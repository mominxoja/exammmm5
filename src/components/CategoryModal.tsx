import { FC } from "react";
import { Form } from "react-router-dom";

interface ICategoryModal {
  type: "post" | "patch";
  id?: number;
  setVisibleModal: (visible: boolean) => void;
}

const CategoryModal: FC<ICategoryModal> = ({ type, id, setVisibleModal }) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form
        action="/categories"
        onSubmit={() => setVisibleModal(false)}
        method={type}
        className="grid w-[300px] gap-2 rounded-md bg-slate-900 p-5"
      >
        <label htmlFor="title">
          <small>Category Title</small>
          <input
            type="text"
            className="input w-full"
            name="title"
            placeholder="Title..."
          />
          <input type="hidden" name="id" value={id} />
        </label>

        <div className="flex items-center gap-2">
          <button
            className="btn bg-green-600 hover:bg-green-800 rounded-lg"
            type="submit"
          >
            {type === "post" ? "Create" : "Save"}

          </button>
          <button
            onClick={() => setVisibleModal(false)}
            className="btn bg-rose-900 hover:bg-rose-800  "
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CategoryModal;
