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
} from "./add-items-form.styles";
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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
  render() {
    return (
      <AddItemsContainer>
        <AddItemsTitle>
          What comes to your mind when you think about Dancing?
        </AddItemsTitle>
        <AddItemsText>
          Upload an image or write an idea .. something from your childhood,
          culture, imagination, fantasy, etc ..
        </AddItemsText>
        <AddItemsText>
          We are working on something{" "}
          <u>
            <b>BIG</b>
          </u>{" "}
          for the dancing community around the world, Your answers will help us
          deliver it in a great way
        </AddItemsText>
        <AddItemsText>
          <small>
            we will not share your information with anyone, we will just store
            them to update you when our project is ready
          </small>
        </AddItemsText>
        <AddItemsText>
          follow <a href="https://www.instagram.com/the.3.eye">@the.3.eye </a>in
          instagram to stay updated
        </AddItemsText>
        <span></span>
        <form onSubmit={this.handleSubmit} onReset={this.handleClick}>
          <SectionsContainer>
            <LeftSection>
              <FormInput
                type="text"
                name="Name"
                value={this.state.Name}
                onChange={this.handleChange}
                label="Name"
                required
              />
              <FormInput
                type="email"
                name="Email"
                value={this.state.Email}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="number"
                name="Mobile"
                value={this.state.Mobile}
                onChange={this.handleChange}
                label="Phone Number"
                required
                pattern="[0-9]*"
                inputmode="numeric"
              />
              <FormInput
                type="text"
                name="Location"
                value={this.state.Location}
                onChange={this.handleChange}
                label="Location"
                required
              />
            </LeftSection>
            <RightSection>
              <FormInput
                type="text"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.handleChange}
                label="ImageURL"
              />
              <FormInput
                id="selectImage"
                type="file"
                name="Image"
                value={this.state.Image}
                onChange={this.handleImageChange}
                label="Image"
                className="upload"
              />
              <FormInput
                type="textarea"
                name="Ideas"
                value={this.state.Ideas}
                onChange={this.handleChange}
                label="Ideas"
              />
              {this.state.hidden ? (
                <CustomButton type="reset">Upload an image</CustomButton>
              ) : (
                <AddItemsText>Image Uploaded</AddItemsText>
              )}
            </RightSection>
          </SectionsContainer>
          <ButtonContainer>
            <CustomButton type="submit">Send</CustomButton>
          </ButtonContainer>
        </form>
      </AddItemsContainer>
    );
  }
}

export default withRouter(AddItemsForm);
