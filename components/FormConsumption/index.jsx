import FormDailyIcon from "images/icons/form_daily.svg";
import FormMonthlyIcon from "images/icons/form_monthly.svg";
import MonthlyForm from "./MonthlyForm";


const FormConsumption = () => {
  return (
    <div className="fcons">
      <div className="fcons__tabs">
        <div className="fcons__tab-headers">
          <div className="fcons__tab-header">
            <span>Денна</span>
            <FormDailyIcon />
          </div>
          <div className="fcons__tab-header is-active">
            <span>Місячна</span>
            <FormMonthlyIcon />
          </div>
        </div>
        <div className="fcons__tab-body">
          <MonthlyForm />
        </div>
      </div>
    </div>
  );
};

export default FormConsumption;
