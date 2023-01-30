<script setup>
import { useCourse } from '../stores/course';
import { useSelect } from '../stores/add_drop';
const { course } = useCourse();
const { select ,  add_subject , remove_subject } = useSelect();

</script>
<template>
    <div class="container mt-5 text-center">
        <div class="row mt-2" style="font-size: 22px; color:white;">
            <div class="col text-start">รายวิชาที่เลือกไว้</div>
            <div class="col-2">
                <div class="row">
                    <button class="col btn btn-success w-50 " data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal">เพิ่ม</button>
                </div>
            </div>
        </div>
        <div class="row mt-3" style="font-size: 22px; color:white;">
            <div class="col">
                <div>รหัสวิชา</div>
            </div>
            <div class="col">
                <div>ชื่อวิชา</div>
            </div>
            <div class="col">
                <div>กลุ่ม</div>
            </div>
            <div class="col-2">
                <div></div>
            </div>
        </div>
        <div class="row m-3" v-for="n in select.length" v-if="select && select.length > 0">
            <div class="col" v-if="select && select[n - 1]">
              {{ select[n - 1].code }}
            </div>
            <div class="col" v-if="select && select[n - 1]">
              {{ select[n - 1].nameTh }}<br>
              {{ select[n - 1].nameEg }}
            </div>
            <div class="col" v-if="select && select[n - 1]">
              {{ select[n - 1].group }}
            </div>
            <div class="col-2">
              <button class="col btn btn-danger w-50 " @click="remove_subject(n-1)">ลด</button>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">เลือกวิชาที่ต้องการ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container text-center">
                        <div class="row" style="font-size: 22px; color:white;">
                            <div class="col">
                                <div>รหัสวิชา</div>
                            </div>
                            <div class="col">
                                <div>ชื่อวิชา</div>
                            </div>
                            <div class="col">
                                <div>กลุ่ม</div>
                            </div>
                            <div class="col-2">
                                <div></div>
                            </div>
                        </div>
                        <div class="row mt-3" v-for="n in course.length">
                            <div class="col" v-if="course && course[n - 1]">
                                {{ course[n - 1].code }}
                            </div>
                            <div class="col" v-if="course && course[n - 1]">
                                {{ course[n - 1].nameTh }}<br>
                                {{ course[n - 1].nameEg }}
                            </div>
                            <div class="col" v-if="course && course[n - 1]">
                                {{ course[n - 1].group }}
                            </div>
                            <div class="col-2">
                                <button class="col btn btn-success w-50 " @click="add_subject(course[n-1].code,course[n-1].nameTh,course[n-1].nameEg,course[n-1].group)" data-bs-dismiss="modal" aria-label="Close">เพิ่ม</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

