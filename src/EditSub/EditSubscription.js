import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Shared/Btn/Button";
import Dropdown from "../../Components/Shared/Dropdown/Dropdown";
import InputField from "../../Components/Shared/inputField/InputField";
import AlertToster from "../../Components/Shared/Toastify/AlertToster";
import useRequest from "../../Hooks/useRequest/useRequest";

const formFields = [
  "name",
  "price",
  "followNewUsersUserLimit",
  "followUsersUserLimit",
  "shareBackItemLimit",
  "shareBackUserLimit",
  "shareMyClosetItemLimit",
  "shareUsersProductItemLimit",
  "clearOutOffersItemLimit",
  "followBackUserLimit",
  "link",
  "offerToLikersItemLimit",
  "sharesNewUsersItemLimit",
  "tagLine",
  "taskNumber",
  "trialPeriod",
  "hidden",
];

const EditSubscription = () => {
  const options = ["Visible", "Hidden"];
  const req = useRequest();
  const { id } = useParams();
  let navigate = useNavigate();
  const [dropdownValue, setDropdownValue] = useState("");
  const [information, setInformation] = useState([]);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onDropdownValue = (value) => {
    if (value === "Visible") {
      setDropdownValue(false);
    } else if (value === "Hidden") {
      setDropdownValue(true);
    } else {
      setDropdownValue("");
    }
  };

  useEffect(() => {
    req({ uri: `subscription/${id}`, method: "GET" })
      .then((res) => res.json())
      .then(({ data }) => {
        Object.keys(data).forEach(
          (d) => formFields.includes(d) && setValue(d, data[d])
        );
        setInformation(data);
        setDropdownValue(data.hidden);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onSubmit = (data) => {
    if (dropdownValue !== "") {
      const newData = { ...data, hidden: dropdownValue };
      req({
        uri: `subscription/${id}`,
        method: "PATCH",
        data: newData,
      })
        .then((res) => res.json())
        .then(({ data }) => {
          Object.keys(data).forEach(
            (res) => formFields.includes(res) && setValue(res, data[res])
          );
          setInformation(data);
          AlertToster("Updated subscription", "success");
          navigate("/dashboard/adminsub");
        })
        .catch((err) => {
          AlertToster("Bad Request", "error");
        });
    }
  };

  return (
    <div className="m-5">
      <h1 className="text-3xl">Update Subscription</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="grid grid-cols-1 md:gap-3 md:grid-cols-2 xl:grid-cols-3">
            <InputField
              label={"Name"}
              customStyle={"text-black"}
              register={{ ...register("name"), required: true }}
            />
            <InputField
              label={"price"}
              customStyle={"text-black"}
              register={{ ...register("price"), required: true }}
            />
            <InputField
              label={"Task Number "}
              customStyle={"text-black"}
              register={{ ...register("taskNumber"), required: true }}
            />
            <InputField
              label={"Follow back user limit"}
              customStyle={"text-black"}
              register={{ ...register("followBackUserLimit"), required: true }}
            />
            <InputField
              label={"Follow Users user limit"}
              customStyle={"text-black"}
              register={{ ...register("followUsersUserLimit"), required: true }}
            />
            <InputField
              label={"Share user product item limit "}
              customStyle={"text-black"}
              register={{
                ...register("shareUsersProductItemLimit"),
                required: true,
              }}
            />
            <InputField
              label={"Share back user limit"}
              customStyle={"text-black"}
              register={{ ...register("shareBackUserLimit"), required: true }}
            />
            <InputField
              label={"Share back item limit "}
              customStyle={"text-black"}
              register={{ ...register("shareBackItemLimit"), required: true }}
            />
            <InputField
              label={"Share my closet item limit "}
              customStyle={"text-black"}
              register={{
                ...register("shareMyClosetItemLimit"),
                required: true,
              }}
            />
            <InputField
              label={"Follow new users user limit"}
              customStyle={"text-black"}
              register={{
                ...register("followNewUsersUserLimit"),
                required: true,
              }}
            />
            <InputField
              label={"Shares new users item  limit"}
              customStyle={"text-black"}
              register={{
                ...register("sharesNewUsersItemLimit"),
                required: true,
              }}
            />
            <InputField
              label={"Offer to likers item limit"}
              customStyle={"text-black"}
              register={{
                ...register("offerToLikersItemLimit"),
                required: true,
              }}
            />
            <InputField
              label={"Clear out offers item limit"}
              customStyle={"text-black"}
              register={{
                ...register("clearOutOffersItemLimit"),
                required: true,
              }}
            />
            <InputField
              label={"Trial period "}
              customStyle={"text-black"}
              register={{ ...register("trialPeriod"), required: true }}
            />
            <InputField
              label={"Tag line"}
              customStyle={"text-black"}
              register={{ ...register("tagLine"), required: true }}
            />
            <InputField
              label={"Link"}
              customStyle={"text-black"}
              register={{ ...register("link"), required: false }}
            />
            <Dropdown
              options={options}
              customStyle={"mt-4"}
              onChange={onDropdownValue}
              value={information.hidden ? "Hidden" : "Visible"}
            />
          </div>
          <div className="flex justify-between mt-10">
            <Link to="/dashboard/adminsub">
              {" "}
              <Button
                children="Close"
                customStyle={"w-32 h-12 bg-bgbutton text-white"}
              />
            </Link>
            <Button
              children={"Update Subscription"}
              type="submit"
              customStyle={"w-60 h-12 bg-bgbutton text-white"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditSubscription;
