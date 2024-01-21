import {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { Bars4Icon, UserCircleIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, CalendarDaysIcon, ChartBarSquareIcon } from "react-native-heroicons/solid"

const DashBoard = () => {
  return (
    <SafeAreaView className="flex">
      <View className="flex  dark:bg-gray-900 dark:text-gray-200  text-black ">
        <View className={`flex flex-row justify-between items-center `}>
          <View className={``}>
            <TouchableOpacity>
            <Bars4Icon
                    color={'black'}
                    className="dark:text-white text-black"
                    size={35}
                  />
            </TouchableOpacity>
          </View>
          <View className={` flex-1 justify-center items-center `}>
            <TouchableOpacity className="">
              <Image
                source={require('../../__Assets/SysPhotos/haert-logo.png')}
                className={`object-contain`}
              />
            </TouchableOpacity>
          </View>
          <View className={``}>
            <TouchableOpacity>
            <UserCircleIcon color="black" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        <View className={`!flex-1 bg-gray-700`}>
          <Text>BODY</Text>
        </View>
        <View className={``}></View>
      </View>
    </SafeAreaView>
  );
};
export default DashBoard;
