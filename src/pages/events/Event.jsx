import { useState } from "react";
import TopSetion from "../../components/cards/TopSetion";
import { useNavigate } from "react-router-dom";
import EventForm from "../../components/form/EventForm";
import EventsTables from "../../components/tables/EventsTables";

const Event = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TopSetion
        pageName="Event"
        goBack={goBack}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleCancel={handleCancel}
        item="Event"
        title="Details"
        showButton
        modalComponent={
          <EventForm
            dataToUpdate={null}
            action={"create"}
            onCancel={handleCancel}
          />
        }
      />

      <EventsTables />
    </>
  );
};

export default Event;
