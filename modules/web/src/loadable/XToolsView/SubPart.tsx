import XToolsViewer from "@/containers/XToolsViewer"
import { HeroText } from "./HeroText"
import { Button, Card, HoverCard, Tabs, Text, TextInput, Title, Tooltip } from "@mantine/core"
import React, { useMemo, useState } from "react"
import {
    IconAperture,
    IconArrowsShuffle, IconLockSquare, IconFingerprint, IconSortDescendingNumbers, IconLock, IconCertificate, IconCalendar, IconArrowsLeftRight, IconLetterX, IconPalette, IconLetterCaseToggle, IconSpeakerphone, IconTextWrap, IconLink, IconUnlink, IconDeviceDesktop, IconTags, IconDeviceMobile, IconWorld, IconKey, IconKeyboard, IconEdit, IconBrowser, IconMailbox, IconBrandGit, IconServer, IconAlarm, IconList, IconDatabase, IconFileInvoice, IconBrandDocker, IconCode, IconBinary, IconBuildingFactory, IconMath, IconHourglass, IconPercentage, IconTemperature, IconPhone, IconAlignJustified, IconFileText, IconMoodSmile, IconEyeOff, IconFileDiff, IconArtboard, IconCamera,
    IconTools,
    IconExchange,
    IconSearch,
} from "@tabler/icons-react"

import _ from "lodash"
import { Link } from "react-router-dom"
import py from 'tiny-pinyin'
import { SystemSubModuleItem, useSystemModulesList } from "@/systemModules"
import { DynamicIcon } from "@/containers/DynamicIcon"

const iconMapping = {
    EyeOff: () => <IconEyeOff />,
    ArrowsShuffle: () => <IconArrowsShuffle />,
    LockSquare: () => <IconLockSquare />,
    Fingerprint: () => <IconFingerprint />, SortDescendingNumbers: () => <IconSortDescendingNumbers />, Lock: () => <IconLock />, AlignJustified: () => <IconAlignJustified />, ShortTextRound: () => <IconTools />, Certificate: () => <IconCertificate />, Calendar: () => <IconCalendar />, ArrowsLeftRight: () => <IconArrowsLeftRight />, LetterX: () => <IconLetterX />, FileDigit: () => <IconTools />, FileDigit2: () => <IconTools />, Palette: () => <IconPalette />, LetterCaseToggle: () => <IconLetterCaseToggle />, Speakerphone: () => <IconSpeakerphone />, Binary: () => <IconBinary />, TextWrap: () => <IconTextWrap />, AlignJustified2: () => <IconAlignJustified />, AlignJustified123: () => <IconAlignJustified />, Braces: () => <IconTools />, Braces2: () => <IconTools />, List: () => <IconList />, Link: () => <IconLink />, Code: () => <IconCode />, Unlink: () => <IconUnlink />, DeviceDesktop: () => <IconDeviceDesktop />, PasswordRound: () => <IconTools />, Tags: () => <IconTags />, DeviceMobile: () => <IconDeviceMobile />, World: () => <IconWorld />, Key: () => <IconKey />, Keyboard: () => <IconKeyboard />, AbcRound: () => <IconTools />, Edit: () => <IconEdit />, Browser: () => <IconBrowser />, HttpRound: () => <IconTools />, CompareArrowsRound: () => <IconTools />, Mailbox: () => <IconMailbox />, BrandGit: () => <IconBrandGit />, Server: () => <IconServer />, Alarm: () => <IconAlarm />, Braces3: () => <IconTools />, Braces21: () => <IconTools />, List3: () => <IconList />, Database: () => <IconDatabase />, FileInvoice: () => <IconFileInvoice />, BrandDocker: () => <IconBrandDocker />, Code2: () => <IconCode />, AlignJustified3: () => <IconAlignJustified />, RouterOutlined: () => <IconTools />, Binary3: () => <IconBinary />, UnfoldMoreOutlined: () => <IconTools />, Devices: () => <IconTools />, Devices2: () => <IconTools />, BuildingFactory: () => <IconBuildingFactory />, Math: () => <IconMath />, Hourglass: () => <IconHourglass />, Percentage: () => <IconPercentage />, TimerOutlined: () => <IconTools />, Temperature: () => <IconTemperature />, SpeedFilled: () => <IconTools />, Phone: () => <IconPhone />, AlignJustified33: () => <IconAlignJustified />, FileText: () => <IconFileText />, MoodSmile: () => <IconMoodSmile />, EyeOff123: () => <IconEyeOff />, FileDiff: () => <IconFileDiff />, Artboard: () => <IconArtboard />, Qrcode: () => <IconTools />, Qrcode322: () => <IconTools />, ImageOutlined: () => <IconTools />, Camera: () => <IconCamera />
}
export default () => {
    const [idx, setIdx] = React.useState('all')
    const sml = useSystemModulesList({})
    const mainSubModulesItems = sml.list[0].children?.filter(x => !x.ignoreInNav) || []
    const currentToolItem = mainSubModulesItems.find(x => x.id == idx) || mainSubModulesItems[0]
    // toolsNavInfo.find(x => x.id === idx) || toolsNavInfo[0]
    let finalSubToolsArr: SystemSubModuleItem[] = []
    const allSubToolsArr = useMemo(() => {
        const allSubModulesItem: SystemSubModuleItem[] = []
        mainSubModulesItems.forEach(x => {
            allSubModulesItem.push(...(x.children || []))
        })
        return allSubModulesItem
    }, [mainSubModulesItems, sml.stillInitializing])
    const [tmpDebounce, _setTmpDebounce] = React.useState(0)
    let setTmpDebounce = useMemo(()=>{
        return _.debounce(_setTmpDebounce, 300)
    },[]) 
    const [searchIpt, _setSearchIpt] = React.useState('')
    const setSearchIpt = (val)=>{
        _setSearchIpt(val)
        setTmpDebounce(Date.now())
    }
    if (idx === 'all') {
        finalSubToolsArr = allSubToolsArr
    } else {
        finalSubToolsArr = currentToolItem.children || []
    }
    const calcFinalSubToolsArr: (
        SystemSubModuleItem
    )[] = useMemo(() => {
        const lowerIpt = searchIpt.toLowerCase()
        return finalSubToolsArr.filter(x => {
            let existOrNot = false;
            if (x.keywords) {
                x.keywords.forEach(y => {
                    if (y.includes(lowerIpt)
                        || py.convertToPinyin(y).includes(lowerIpt)
                    ) {
                        existOrNot = true
                    }
                })
            }
            if (existOrNot) {
                return true
            }
            return (_.toLower(x.name) + _.toLower(py.convertToPinyin(x.name))).indexOf(lowerIpt) !== -1 || ('' + (
                x?.keywords?.join("") + _.toLower(py.convertToPinyin(x?.keywords?.join("") + '') ) || 
                _.toLower(x.description) + _.toLower(py.convertToPinyin(x.description || ''))

            )).indexOf(lowerIpt) !== -1
        })
    }, [tmpDebounce, idx, sml.stillInitializing])
    const previewCtn = 60 - 4
    const [forceViewAll, onForceViewAll] = useState(false)
    return (
        <div>
            <Tabs value={idx} onChange={e => {
                setIdx(e + "")
            }}>
                <Tabs.List>
                    <Tabs.Tab value={'all'} >全部({allSubToolsArr.length})</Tabs.Tab>
                    {
                        mainSubModulesItems.map(x => {
                            return (
                                <Tabs.Tab value={x.id} >
                                    {x.name}({x.children?.length || 0})
                                </Tabs.Tab>
                            )
                        })
                    }
                </Tabs.List>
            </Tabs>
            <div className="p-2 mt-1">
                <TextInput placeholder="键入以快速检索所需功能，支持大小写拼音"
                    leftSection={<IconSearch />}
                    value={searchIpt}
                    name='quickseachmain'
                    onChange={(e) => setSearchIpt(e.currentTarget.value)}
                />
            </div>
            <div className="  p-2 pt-1 mt-0">
                {
                    (
                        forceViewAll ? calcFinalSubToolsArr : _.take(calcFinalSubToolsArr, previewCtn)
                    ).map(x => {
                        return (
                            <Link to={x.href + ''}>
                                <Tooltip label={x.description} position="bottom" openDelay={50} style={{
                                }}>
                                    <Card
                                        shadow="xs" withBorder className="w-[100%] sm:w-[29%] 2xl:w-[24%]  hover:border-blue-300   box-border mb-2 mr-2 inline-block  " >
                                        <div className="flex items-center mb-2  space-x-2">
                                            {
                                                x.iconInStr ? <DynamicIcon icon={x.iconInStr} /> :
                                                    x.icon && x.icon.name && <DynamicIcon icon={x.icon.name} /> || <IconExchange />}
                                            <Title order={4} className="font-normal">
                                                <Text truncate>{x.name}</Text>
                                            </Title>
                                        </div>
                                        <Text truncate className="text-slate-600 dark:text-slate-400" size={"sm"}>{x.description}</Text>
                                    </Card>
                                </Tooltip>

                            </Link>
                        )
                    })
                }
            </div>
            {
                _.size(calcFinalSubToolsArr) > previewCtn && !forceViewAll && (
                    <div className="flex justify-center ">
                        <Button variant="default" size='lg' onClick={() => {
                            onForceViewAll(true)
                        }}>查看全部</Button>
                    </div>)
            }
        </div>
    )
}