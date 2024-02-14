import QtQuick
import QtQml
import QtQuick.Window
import QtQuick.Controls
import QtQuick.Controls.Material
import QtQuick.Layouts

ColumnLayout {
    id: column
    anchors.horizontalCenter: parent.horizontalCenter

    // Static friction
        Label {
            text: qsTr("Static friction")
            Layout.fillWidth: true
        }

    Slider {
        id: staticFrictionSlider
        focusPolicy: Qt.NoFocus
        from: 0
        to: 1
        value: 0.5
        onValueChanged: scene.setRestitutionValue(staticFrictionSlider.value)
    }

    // Dynamic friction
        Label {
            text: qsTr("Dynamic friction")
            Layout.fillWidth: true
        }

    Slider {
        id: dynamicFrictionSlider
        focusPolicy: Qt.NoFocus
        from: 0
        to: 1
        value: 0.5
        // TODO: Set on value changed function
    }

    // Restitution
        Label {
            text: qsTr("Restitution")
            Layout.fillWidth: true
        }

    /* TODO: Create Slider for restitution with default value of 0.5 */

    // Gravity
    Label {
        text: qsTr("Gravity")
    }
    GridLayout {
        columns: 2
        RadioButton {
            id: gravityZero
            text: qsTr("Zero")
            onCheckedChanged: scene.updateGravity("Zero")
        }
        /* TODO: ADD RADIO BUTTONS FOR MOON AND MARS */
        RadioButton {
            id: gravityEarth
            text: qsTr("Earth")
            onCheckedChanged: scene.updateGravity("Earth")
            checked: true
        }
    }

    // No. dice
    RowLayout {
        Label {
            text: qsTr("No. dice")
            Layout.fillWidth: true
        }
    }
    Slider {
        id: diceSlider
        focusPolicy: Qt.NoFocus
        from: 1
        to: 10
        value: 5
        stepSize: 1
        onValueChanged: scene.spawnDice(value)
    }

    // Throw dice
    Button {
        id: throwButton
        Layout.alignment: Qt.AlignHCenter
        text: qsTr("Throw dice")
        onClicked: scene.spawnDice(diceSlider.value)
    }


}
