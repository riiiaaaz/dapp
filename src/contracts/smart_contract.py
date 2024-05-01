from pyteal import *
import os

def approval_program():
    # Define global keys
    weather_key = Bytes("weather_count")
    uni_key = Bytes("uni_count")
    
    handle_creation = Seq([
        App.globalPut(weather_key, Int(0)),
        App.globalPut(uni_key, Int(0)),
        Return(Int(1))
    ])

    # Increment weather data count
    increment_weather = Seq([
        App.globalPut(weather_key, App.globalGet(weather_key) + Int(1)),
        Return(Int(1))
    ])

    # Increment uni data count
    increment_uni = Seq([
        App.globalPut(uni_key, App.globalGet(uni_key) + Int(1)),
        Return(Int(1))
    ])

    handle_noop = Cond(
        [Txn.application_args[0] == Bytes("addWeather"), increment_weather],
        [Txn.application_args[0] == Bytes("addUni"), increment_uni]
    )

    program = Cond(
        [Txn.application_id() == Int(0), handle_creation],
        [Txn.on_completion() == OnComplete.NoOp, handle_noop]
    )
    
    return compileTeal(program, Mode.Application, version=3)

def clear_state_program():
    return compileTeal(Return(Int(1)), Mode.Application, version=3)

if __name__ == "__main__":
    path = "./contracts/artifacts"
    with open(os.path.join(path, "smart_contract_approval.teal"), 'w') as f:
        f.write(approval_program())
    with open(os.path.join(path, "smart_contract_clear.teal"), 'w') as f:
        f.write(clear_state_program())

