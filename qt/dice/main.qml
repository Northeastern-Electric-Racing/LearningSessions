// Copyright (C) 2023 The Qt Company Ltd.
// SPDX-License-Identifier: LicenseRef-Qt-Commercial OR BSD-3-Clause

import QtQuick
import QtQml
import QtQuick.Window
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Layouts

ApplicationWindow {
    id: root
    width: 800
    height: 600
    visible: true
    property real currDrawerWidth: drawer.width * drawer.position

    Scene {
        id: scene
        x: currDrawerWidth - 10 // pad 10px for rounded corners
        width: parent.width - currDrawerWidth + 20
        height: parent.height

        settingsStaticFriction: 0.5
        settingsDynamicFriction: 0.5
        settingsRestitution: 0.5

        Label {
            id: tapLabel
            anchors {
                centerIn: parent
            }

            text: qsTr("Tap/click to throw dice")
            font.pixelSize: 32
            font.bold: true
            style: Text.Raised
            color: "white"

            NumberAnimation on opacity {
                id: tapLabelAnimation
                running: false
                from: 1
                to: 0
                duration: 300
            }

            function hide() {
                if (tapLabel.opacity >= 1) {
                    tapLabelAnimation.running = true;
                }
            }
        }

        MouseArea {
            anchors {
                fill: parent
            }
            onClicked: {
                tapLabel.hide();
                scene.spawnDice(diceSlider.value);
            }
        }

        function setStaticFrictionValue(value: number) {
            scene.settingsStaticFriction = value;
        }

        function setDynamicFrictionValue(value: number) {

        }

        function setRestitutionValue(value: number) {

        }

        function updateGravity(value: string) {
            if (value === "Zero") {
                scene.settingGravity = 0;
            }
            if (value === "Moon") {
                scene.settingGravity = 162;
            }
            if (value === "Mars") {
                scene.settingGravity = 371;
            }
            if (value === "Earth") {
                scene.settingGravity = 980.7;
            }
        }
    }

    Drawer {
        id: drawer
        height: root.height
        width: column.width + 40

        DrawerContent { }
    }

    RoundButton {
        id: iconOpen
        text: qsTr("\u2630")
        x: currDrawerWidth
        onClicked: {
            tapLabel.hide();
            drawer.open();
        }
    }
}
