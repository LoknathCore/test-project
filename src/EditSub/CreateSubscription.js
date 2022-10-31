import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../Components/Shared/Btn/Button";
import Dropdown from "../../Components/Shared/Dropdown/Dropdown";
import InputField from "../../Components/Shared/inputField/InputField";
import useRequest from "../../Hooks/useRequest/useRequest";
import AlertToster from "../../Components/Shared/Toastify/AlertToster";
import { useState } from "react";
import useNavValue from "../../Contexts/NavProvider/useNavValue";
import { useEffect } from "react";


//set default value for update subscription
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

const CreateSubscription = () => {
    const data = ["Visible", "Hidden"];

    const [dropDownValue, setDropdownValue] = useState("");
    const [activeNav, setActiveNav] = useNavValue();
    const [information, setInformation] = useState([])
    const req = useRequest();
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
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
                if (id) {
                    Object.keys(data).forEach(
                        (d) => formFields.includes(d) && setValue(d, data[d])
                    );
                }
                setInformation(data);
                setDropdownValue(data.hidden);
            })
            .catch((err) => console.log(err));
    }, [])



    const onSubmit = (data) => {
        if (dropDownValue !== "") {
            const newData = { ...data, hidden: dropDownValue };
            if (id) {
                delete newData.tagLine;
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

            } else {

                req({
                    uri: `subscription/`,
                    method: "POST",
                    data: newData,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.status === 200) {
                            AlertToster("Add Subscription", "success");
                            navigate("/dashboard/adminsub");
                            setActiveNav("Subscription");
                        }

                        data.error && AlertToster(data.error, "error");
                    })
                    .catch((err) => {
                        AlertToster("Bad request!", "error");
                    });
            }
        } else {
            AlertToster("Select Dropdown", "error");
        }
    };

    return (
        <div className="mt-10 mx-5 grid grid-cols-1">
            <h1 className="text-3xl text-bgCardHeader">
                {id ? "Update Subscription" : "Create Subscription"}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 md:gap-3">
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
                        label={"Share user product item limit"}
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
                        disable={id && true}
                        register={{ ...register("tagLine"), required: true }}
                    />
                    <InputField
                        label={"Link"}
                        customStyle={"text-black"}
                        register={{ ...register("link"), required: false }}
                    />
                    <Dropdown
                        options={data}
                        customStyle={"mt-4"}
                        onChange={(value) => onDropdownValue(value)}

                    />
                </div>
                <div className="flex justify-between mt-10">
                    <Link to="/dashboard/adminsub">
                        <Button
                            children="Close"
                            customStyle={"w-32 h-12 bg-bgbutton text-white"}
                        />
                    </Link>

                    <Button
                        children={id ? "Update Subscription" : "Save Subscription"}
                        type="submit"
                        customStyle={"w-60 h-12 bg-bgbutton text-white"}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateSubscription;
