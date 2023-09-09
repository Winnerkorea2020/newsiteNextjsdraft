import React from "react";

const Alert = () => {
  return (
    <div>
      <div className="my-6">
        <h3 className="py-3 text-red-600 font-semibold">※ 경고 및 주의사항</h3>
        <div className="p-6 border border-red-600 font-medium text-red-600 rounded-lg">
          모든 투자에는 위험이 있으며, 자금을 잃을 가능성이 있다는 것을 인식해야
          합니다. 본 사이트에서 제공하는 모든 정보는 투자판단의 참고자료이며,
          서비스 이용에 따른 투자의 최종 책임은 이용자 본인에게 있습니다.
        </div>
      </div>
    </div>
  );
};

export default Alert;
