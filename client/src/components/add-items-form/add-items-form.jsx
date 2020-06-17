import React from "react";
import { withRouter } from "react-router-dom";
import {
  AddItemsContainer,
  AddItemsTitle,
  LeftSection,
  RightSection,
  SectionsContainer,
  ButtonContainer,
  AddItemsText,
  FlagContainer,
  DivContainer,
} from "./add-items-form.styles";
import Russia from "../../assets/russia.png";
import Spain from "../../assets/spain.png";
import England from "../../assets/uk.png";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import firebase from "../../firebase/firebase.utils";
import { storge } from "../../firebase/firebase.utils";

class AddItemsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Email: "",
      Mobile: "",
      Location: "",
      imageURL: "",
      Image: "",
      uploadImage: "",
      Ideas: "",
      hidden: true,
      lang: "eng",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLang = this.handleLang.bind(this);
  }
  handleImageChange = (e) => {
    const image = e.target.files[0];
    this.setState({ hidden: false });
    const uploadTask = storge.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storge
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ uploadImage: url });
            console.log(this.state.uploadImage);
          });
      }
    );
  };
  handleSubmit = async (
    event,
    Name,
    Email,
    Mobile,
    Location,
    imageURL,
    Image,
    Ideas
  ) => {
    event.preventDefault();

    const name = this.state.Name;
    const imageUrl = this.state.imageURL;
    const email = this.state.Email;
    const mobile = this.state.Mobile;
    const location = this.state.Location;
    const image = this.state.uploadImage;
    const ideas = this.state.Ideas;

    var db = firebase.firestore();

    const Items = db.collection("collections");
    Items.doc(email)
      .set(
        {
          name: name,
          imageUrl: imageUrl,
          email: email,
          mobile: mobile,
          location: location,
          image: image,
          ideas: ideas,
        },
        { merge: true }
      )
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    alert("updated successfully");
    this.setState({
      Name: "",
      Email: "",
      Mobile: "",
      Location: "",
      imageURL: "",
      Image: "",
      uploadImage: "",
      Ideas: "",
      hidden: true,
    });

    console.log(this.state);
  };

  handleChange = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ [nam]: val });
  };
  handleClick = () => {
    document.getElementById("selectImage").click();
  };

  handleLang = (event) => {
    const val = event.target.alt;
    this.setState({ lang: val });
  };
  render() {
    return (
      <div>
        <FlagContainer>
          <img onClick={this.handleLang} value="eng" src={England} alt="eng" />
          <img onClick={this.handleLang} value="rus" src={Russia} alt="rus" />
          <img onClick={this.handleLang} value="spn" src={Spain} alt="spn" />
        </FlagContainer>
        <AddItemsContainer>
          {this.state.lang === "eng" ? (
            <DivContainer>
              <AddItemsTitle>
                What comes to your mind when you think about Dancing?
              </AddItemsTitle>
              <AddItemsText>
                Upload an image or write an idea .. something from your
                childhood, culture, imagination, fantasy, etc ..
              </AddItemsText>
              <AddItemsText>
                We are working on something{" "}
                <u>
                  <b>BIG</b>
                </u>{" "}
                for the dancing community around the world, Your answers will
                help us deliver it in a great way
              </AddItemsText>
              <AddItemsText>
                <small>
                  we will not share your information with anyone, we will just
                  store them to update you when our project is ready
                </small>
              </AddItemsText>
              <AddItemsText>
                follow{" "}
                <a href="https://www.instagram.com/the.3.eye">@the.3.eye </a>
                in instagram to stay updated
              </AddItemsText>
            </DivContainer>
          ) : this.state.lang === "rus" ? (
            <DivContainer>
              <AddItemsTitle>
                Что приходит к тебе в голову, когда ты думаешь о танце?
              </AddItemsTitle>
              <AddItemsText>
                Загрузи изображение или напиши идею .. что-то из детства,
                культуры, воображения, фантазии, и т.д. ..
              </AddItemsText>
              <AddItemsText>
                Мы работаем над большим проектом для танцоров со всего мира,
                Твой ответ поможет нам сделать продукт наилучшим образом.
              </AddItemsText>
              <AddItemsText>
                <small>
                  Мы не будем разглашать персональную информацию , мы сохраним
                  ее, чтобы уведомить тебя, когда проект будет готов.
                </small>
              </AddItemsText>
              <AddItemsText>
                Подписывайся на инстаграм{" "}
                <a href="https://www.instagram.com/the.3.eye">@the.3.eye </a>
                чтобы оставаться в курсе последних новостей
              </AddItemsText>
            </DivContainer>
          ) : (
            <DivContainer>
              <AddItemsTitle>
                ¿Qué viene a tu mente cuando piensas en el baile?
              </AddItemsTitle>
              <AddItemsText>
                Sube una imagen o escribe un idea, algo de tu niñez, cultura,
                imaginación, fantasía, etc.
              </AddItemsText>
              <AddItemsText>
                Estamos trabajando en algo{" "}
                <u>
                  <b>GRANDE</b>
                </u>{" "}
                para la comunidad del baile alrededor del mundo. Tu respuesta
                nos ayudará a llegar de forma exitosa.
              </AddItemsText>
              <AddItemsText>
                <small>
                  Tu información no será compartida con nadie, solo
                  almacenaremos para avisarte cuando nuestro proyecto esté
                  listo.
                </small>
              </AddItemsText>
              <AddItemsText>
                Sigue a{" "}
                <a href="https://www.instagram.com/the.3.eye">@the.3.eye </a>
                en Instagram para estar actualizado
              </AddItemsText>
            </DivContainer>
          )}

          <span></span>
          <form onSubmit={this.handleSubmit} onReset={this.handleClick}>
            <SectionsContainer>
              <LeftSection>
                <FormInput
                  type="text"
                  name="Name"
                  value={this.state.Name}
                  onChange={this.handleChange}
                  label={
                    this.state.lang === "eng"
                      ? "Name"
                      : this.state.lang === "rus"
                      ? "Имя"
                      : "Nombre"
                  }
                  required
                />
                <FormInput
                  type="email"
                  name="Email"
                  value={this.state.Email}
                  onChange={this.handleChange}
                  label={
                    this.state.lang === "eng"
                      ? "Email"
                      : this.state.lang === "rus"
                      ? "Email"
                      : "Correo Electrónico"
                  }
                  required
                />
                <FormInput
                  type="number"
                  name="Mobile"
                  value={this.state.Mobile}
                  onChange={this.handleChange}
                  label={
                    this.state.lang === "eng"
                      ? "Phone Number"
                      : this.state.lang === "rus"
                      ? "Номер телефона"
                      : "Número De Teléfono"
                  }
                  required
                  pattern="[0-9]*"
                  inputmode="numeric"
                />
                <FormInput
                  type="text"
                  name="Location"
                  value={this.state.Location}
                  onChange={this.handleChange}
                  label={
                    this.state.lang === "eng"
                      ? "Location"
                      : this.state.lang === "rus"
                      ? "Страна, Город"
                      : "Lugar"
                  }
                  required
                />
              </LeftSection>
              <RightSection>
                <FormInput
                  type="text"
                  name="imageURL"
                  value={this.state.imageURL}
                  onChange={this.handleChange}
                  label={
                    this.state.lang === "eng"
                      ? "ImageURL"
                      : this.state.lang === "rus"
                      ? "Изображение URL"
                      : "URL de la imagen"
                  }
                />
                <FormInput
                  id="selectImage"
                  type="file"
                  name="Image"
                  value={this.state.Image}
                  onChange={this.handleImageChange}
                  label={
                    this.state.lang === "eng"
                      ? "Image"
                      : this.state.lang === "rus"
                      ? "Изображение"
                      : "`imagen`"
                  }
                  className="upload"
                />
                <FormInput
                  type="textarea"
                  name="Ideas"
                  value={this.state.Ideas}
                  onChange={this.handleChange}
                  label={
                    this.state.lang === "eng"
                      ? "Ideas"
                      : this.state.lang === "rus"
                      ? "Идеи"
                      : "Ideas"
                  }
                />

                {this.state.hidden ? (
                  <CustomButton type="reset">
                    {this.state.lang === "eng"
                      ? "Upload an image"
                      : this.state.lang === "rus"
                      ? "загрузить изображение"
                      : "Subir Una Imagen"}
                  </CustomButton>
                ) : (
                  <AddItemsText>
                    {this.state.lang === "eng"
                      ? "Image Uploaded"
                      : this.state.lang === "rus"
                      ? "Изображение было загружено"
                      : "Imagen Cargada"}
                  </AddItemsText>
                )}
              </RightSection>
            </SectionsContainer>
            <ButtonContainer>
              {this.state.lang === "eng" ? (
                <CustomButton type="submit">Send</CustomButton>
              ) : this.state.lang === "rus" ? (
                <CustomButton type="submit">Отправить</CustomButton>
              ) : (
                <CustomButton type="submit">Enviar</CustomButton>
              )}
            </ButtonContainer>
          </form>
        </AddItemsContainer>
      </div>
    );
  }
}

export default withRouter(AddItemsForm);
