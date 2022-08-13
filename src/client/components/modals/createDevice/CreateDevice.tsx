import React, {FC, useContext, useState, KeyboardEvent, useEffect} from 'react';
import styles from './CreateDevice.module.scss';
import {Context} from "../../../../index";
import Modal from "../modal/Modal";
import InputForm from "../../inputForm/InputForm";
import {InputTypeEnum} from "../../input/InputTypes";
import SecondaryButton from "../../button/secondaryButton/SecondaryButton";
import Text from "../../text/Text";
import {TextVariantEnum} from "../../text/TextTypes";
import {SecondaryButtonEnum} from "../../button/secondaryButton/SecondaryButtonTypes";
import {ADD_NEW_PRODUCT_BUTTON_TEXT, COMPOUND_TEXT} from "../../../constants/createDevice";
import CreateDeviceProduct from "./createDeviceProduct/CreateDeviceProduct";
import {ICreateDeviceProductProps} from "./createDeviceProduct/CreateDeviceProductTypes";
import {IModalProps} from "../modal/ModalTypes";
import {createDevice, fetchTypes} from "../../../http/deviceAPI";
import {observer} from "mobx-react-lite";

type CreateDeviceType = Omit<ICreateDeviceProductProps, 'removeProductHandler'>;

const CreateDevice: FC<IModalProps> = observer(({ isModalVisible, setModalVisible }) => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [priceInRubles, setPriceInRubles] = useState(0);
  const [priceInCents, setPriceInCents] = useState(0);
  const [file, setFile] = useState<null | File>(null);

  const { admin, device } = useContext(Context);
  const [compound, setCompound] = useState<CreateDeviceType[]>([]);
  const { deviceModalData } = admin;

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
  }, []);

  const addProduct = () => {
    setCompound([ ...compound, { id: Date.now() } ])
  }

  const removeProduct = (id: number) => {
    setCompound(compound.filter(product => product.id !== id))
  }

  const selectFile = (event: KeyboardEvent<HTMLInputElement> | null) => {
    setFile(event!.target.files![0])
  }

  const changeCompound = (key: string, value: KeyboardEvent<HTMLInputElement> | string, number: number) => {
    setCompound(compound.map(product => product.id === number ? { ...product, [key]: value } : product ))
  }

  const addDeviceButtonClick = () => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('priceInRubles', `${priceInRubles}`);
    formData.append('priceInCents', `${priceInCents}`);
    formData.append('img', `10000`);
    formData.append('typeId', `${device.selectedType.id}`);

    createDevice(formData).then(data => setModalVisible(false));
  }

  const typeText = `${deviceModalData.typeInput.text}:`;

  return (
    <Modal {...deviceModalData.header} isModalVisible={isModalVisible} setModalVisible={setModalVisible}>
      <div>
        <InputForm
          title={typeText}
          list={deviceModalData.typeInput.list}
          placeholder={deviceModalData.typeInput.text}
          image={deviceModalData.typeInput.image}
          value={type}
          onChange={event => setType(event.target.value)}
        />
        <datalist id={deviceModalData.typeInput.id}>
          {device.types.map(type => (
            <option value={type.name} key={type.id} onClick={() => device.setSelectedType(type)} />
          ))}
        </datalist>
      </div>
      <InputForm
        title={deviceModalData.titleInput.title}
        placeholder={deviceModalData.titleInput.placeholder}
        image={deviceModalData.titleInput.image}
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <InputForm
        title={deviceModalData.priceInput.title}
        placeholder={deviceModalData.priceInput.placeholder}
        image={deviceModalData.priceInput.image}
        type={InputTypeEnum.Number}
        value={priceInRubles}
        onChange={event => setPriceInRubles(Number(event.target.value))}
      />
      <InputForm
        title={deviceModalData.priceInput.title}
        placeholder={deviceModalData.priceInput.placeholder}
        image={deviceModalData.priceInput.image}
        type={InputTypeEnum.Number}
        value={priceInCents}
        onChange={event => setPriceInCents(Number(event.target.value))}
      />
      <InputForm
        title={deviceModalData.imageInput.title}
        accept={deviceModalData.imageInput.accept}
        name={deviceModalData.imageInput.name}
        type={InputTypeEnum.File}
        value={file}
        onChange={selectFile}
      />
      <hr />
      <div>
        <Text
          children={COMPOUND_TEXT}
          className={styles['device-modal-text']}
          variant={TextVariantEnum.L}
        />
        <SecondaryButton
          buttonText={ADD_NEW_PRODUCT_BUTTON_TEXT}
          onClick={addProduct}
          className={styles['device-modal-add-button']}
          type={SecondaryButtonEnum.Secondary}
        />
        {compound.map((product) => (
            <CreateDeviceProduct
              {...product}
              removeProductHandler={() => removeProduct(product.id)}
              key={product.id}
              name={product.name}
              onChangeName={(event: KeyboardEvent<HTMLInputElement>) => changeCompound('name', event.target.value, product.id )}
              count={product.count}
              onChangeCount={(event: KeyboardEvent<HTMLInputElement>) => changeCompound('count', event.target.value, product.id )}
            />
        ))}
      </div>
      <hr />
      <SecondaryButton buttonText={deviceModalData.buttonText} className={styles['device-modal-button']} onClick={addDeviceButtonClick} />
    </Modal>
  );
});

export default CreateDevice;
