import { IElement } from "./Form";

interface Props {
    stateFunc: (data: IElement[]) => void,
    state: IElement[],
    index: number
}

export const Blog: React.FC<Props> = ({ stateFunc, state, index }) => {

    const s = (e: any) => {
        let items = [...state];
        let item = { ...items[index] };
        item.data = e.target.value;
        items[index] = item;
        stateFunc(items)
    }

    const i = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        let items = [...state];
        let item = { ...items[index] };
        item.image = e.target.files[0];
        items[index] = item;
        stateFunc(items)
    }

    return (
        <div>
            <input type="text" placeholder="Enter something" onChange={s} />
            <input type="file" name="" id="file" onChange={i} />
        </div>
    );
}