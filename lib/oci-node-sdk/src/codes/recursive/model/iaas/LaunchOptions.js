/**
* Options for tuning compatibility and performance of VM shapes.
* @param {string} bootVolumeType Emulation type for volume. ISCSI - ISCSI attached block storage device. This is the default for Boot Volumes and Remote Block Storage volumes on Oracle provided images. SCSI - Emulated SCSI disk. IDE - Emulated IDE disk. VFIO - Direct attached Virtual Function storage. This is the default option for Local data volumes on Oracle provided images. PARAVIRTUALIZED - Paravirtualized disk. Allowed values are: ISCSI SCSI IDE VFIO PARAVIRTUALIZED
* @param {string} firmware Firmware used to boot VM. Select the option that matches your operating system. BIOS - Boot VM using BIOS style firmware. This is compatible with both 32 bit and 64 bit operating systems that boot using MBR style bootloaders. UEFI_64 - Boot VM using UEFI style firmware compatible with 64 bit operating systems. This is the default for Oracle provided images. Allowed values are: BIOS UEFI_64
* @param {string} networkType Emulation type for NIC. E1000 - Emulated Gigabit ethernet controller. Compatible with Linux e1000 network driver. VFIO - Direct attached Virtual Function network controller. Default for Oracle provided images. Allowed values are: E1000 VFIO
* @param {string} remoteDataVolumeType Emulation type for volume. ISCSI - ISCSI attached block storage device. This is the default for Boot Volumes and Remote Block Storage volumes on Oracle provided images. SCSI - Emulated SCSI disk. IDE - Emulated IDE disk. VFIO - Direct attached Virtual Function storage. This is the default option for Local data volumes on Oracle provided images. PARAVIRTUALIZED - Paravirtualized disk. Allowed values are: ISCSI SCSI IDE VFIO PARAVIRTUALIZED
* @param {boolean} [isPvEncryptionInTransitEnabled] Whether to enable in-transit encryption for the boot volume's paravirtualized attachment. The default value is false.
* @param {boolean} [isConsistentVolumeNamingEnabled] Whether to enable consistent volume naming feature. Defaults to false.
* @class LaunchOptions
*/
class LaunchOptions {
	constructor(bootVolumeType, firmware, networkType, remoteDataVolumeType, isPvEncryptionInTransitEnabled, isConsistentVolumeNamingEnabled){
		this.bootVolumeType = bootVolumeType;
		this.firmware = firmware;
		this.networkType = networkType;
		this.remoteDataVolumeType = remoteDataVolumeType;
		this.isPvEncryptionInTransitEnabled = isPvEncryptionInTransitEnabled;
		this.isConsistentVolumeNamingEnabled = isConsistentVolumeNamingEnabled;
	}
}

module.exports = LaunchOptions;
