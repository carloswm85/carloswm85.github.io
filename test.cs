public virtual ActionResult Edit(int? id, int editMode)
        {
            ViewModel vm = new ViewModel();
            try
            {

                if (id.HasValue)
                {
                    rvm = _requestMapper.GetRequestItem(_operationsService.GetRequestItem(id.Value));
                    if(editMode == 0) return View("View", rvm);
                }
                else
                {
                    rvm.Producers = _adminService.GetPersonsQueryable();
                    rvm.Files = _adminService.GetFilesQueryable();
                    rvm.ExpirationPeriods = _adminService.GetConfigurationQueryable("FechaVencimiento");
                    ViewBag.Title = Resources.Request.EDIT_TITLE_DELIVERY;
                }


                return View(rvm);
            }
            catch (Exception ex)
            {
                string iError = LogHelper.LogError(ex, "Applicant", "Edit");
                vm.Message = string.Format(Resources.Global.TRY_CATCH_ERROR_MESSAGE, iError);
                vm.Type = MessageModel.MessageType.Error;
                return View(vm);
            }
        }